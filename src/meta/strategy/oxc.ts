import type { IOxlintRules, RulesMetaStrategy } from '@/types.ts'
import { load } from 'cheerio'
import { marked } from 'marked'
import { OxcLintDocParse } from '@/meta/prase/oxc.lint.parse.ts'
import { getRuleMarkDownContent } from '@/utils.ts'

async function getRuleDescription(rule: IOxlintRules): Promise<string> {
    const mdContent = await getRuleMarkDownContent(rule)
    const html = await marked(mdContent)

    const $ = load(html)

    const description = $('h3')
        .filter((_, el) => $(el).text().trim() === 'What it does')
        .nextAll('p')
        .first()
        .text()

    return description.replace(/[\u00A0\u2000-\u200B\u202F\u205F\u3000]/g, ' ')
}

export function OXCRulesMetaConfig(): RulesMetaStrategy {
    const oxLintDocParse = new OxcLintDocParse()
    return {
        async getRuleMeta(rule: IOxlintRules) {
            const description = await getRuleDescription(rule)

            return {
                name: rule.value,
                meta: {
                    source: rule.scope,
                    category: rule.category,
                    default: rule.default,
                    description,
                    docs: {
                        description,
                        url: rule.docs_url,
                        category: rule.category,
                    },
                    fixable: rule.fix,
                    schema: await oxLintDocParse.parse(rule),
                },
            }
        },
    }
}
