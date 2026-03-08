import type { Token, Tokens } from 'marked'
import type { IOxlintRules } from '@/types.ts'
import { createSchema } from 'genson-js/dist'
import { marked } from 'marked'
import { getRuleMarkDownContent, toConfigObject } from '@/utils.ts'

export class OxcLintDocParse {
    async parse(rule: IOxlintRules) {
        const markdown = await getRuleMarkDownContent(rule)
        const tokens = marked.lexer(markdown)
        const mdcAST = this.extractConfigurationSection(tokens)
        if (mdcAST.length === 0) {
            return []
        }

        return createSchema(toConfigObject(this.parseUseConfiguration(mdcAST)))
    }

    private extractConfigurationSection(tokens: Token[]): Token[] {
        if (!Array.isArray(tokens) || tokens.length === 0) {
            return []
        }

        let startIndex = -1
        let endIndex = -1

        for (let i = 0; i < tokens.length; i++) {
            const node = tokens[i] as Token

            if (this.isHeading(node, 'Configuration', 2)) {
                startIndex = i + 1
            }

            if (startIndex !== -1 && this.isHeading(node, 'How to use', 2)) {
                endIndex = i
                break
            }
        }

        if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
            return []
        }

        return tokens.slice(startIndex, endIndex)
    }

    private isHeading(node: Token, text: string, depth: number) {
        return (
            node.type === 'heading'
            && node.depth === depth
            && node.text?.trim() === text.trim()
        )
    }

    private parseUseConfiguration(ast: Token[]) {
        const options = []
        let currentOption: any = {}

        for (const node of ast) {
            if (node.type === 'heading' && node.depth === 3) {
                if (currentOption) {
                    options.push(currentOption)
                }

                currentOption = {
                    name: node.text.trim(),
                    type: null,
                }
                continue
            }

            if (node.type !== 'paragraph')
                continue

            const text = node.text.trim()
            if (text.startsWith('default:')) {
                const codespan = node.tokens?.find(token => token.type === 'codespan') as unknown as Tokens.Codespan
                currentOption.type = this.parseConversionValue(codespan.text.trim())
            }
        }

        if (currentOption) {
            options.push(currentOption)
        }

        return options
    }

    private parseConversionValue(content: string) {
        switch (content) {
            case '""':
                return ''
            case 'true':
                return true
            case 'false':
                return false
            case '[]':
                return []
            default:
                return Number.isNaN(Number(content)) ? content : Number(content)
        }
    }
}
