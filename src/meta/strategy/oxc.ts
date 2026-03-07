import type { IOxlintRules, RulesMetaStrategy } from '@/types.ts'
import { readFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { load } from 'cheerio'
import { marked } from 'marked'
import { OXC_WEBSITE_PATH } from '@/path.ts'

async function getRuleMarkDownContent(rule: IOxlintRules) {
    const RULES_GLOB_DIR = join('..', 'oxc-project-website', 'src', 'docs', 'guide', 'usage', 'linter', 'rules')

    return await readFile(resolve(OXC_WEBSITE_PATH, `${RULES_GLOB_DIR}/${rule.scope}/${rule.value}.md`), 'utf-8')
}
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
    return {
        async getRuleMeta(rule: IOxlintRules) {
            const description = await getRuleDescription(rule)

            return {
                name: rule.value,
                meta: {
                    source: rule.scope,
                    category: rule.category,
                    default: false,
                    description,
                    docs: {
                        description,
                        url: rule.docs_url,
                    },
                    fixable: rule.fix,
                    schema: [],
                },
            }
        },
    }
}
