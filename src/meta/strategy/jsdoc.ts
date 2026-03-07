import type { Rule } from 'eslint'
import type { IOxlintRules, RulesMetaStrategy } from '@/types.ts'
import { interopDefault } from '@/utils.ts'

export function JsDocRulesMetaConfig(): RulesMetaStrategy {
    return {
        async getRuleMeta(rule: IOxlintRules) {
            const unicornRules = await interopDefault(import('eslint-plugin-jsdoc'))
            const rulesMeta = unicornRules.rules![rule.value] as Rule.RuleModule

            return {
                name: rule.value,
                meta: {
                    source: rule.scope,
                    category: rule.category,
                    default: rule.default,
                    docs: {
                        description: rulesMeta?.meta?.docs?.description || '',
                        url: rule.docs_url,
                        category: rule.category,
                    },
                    fixable: rule.fix,
                    schema: rulesMeta?.meta?.schema || [],
                },
            }
        },
    }
}
