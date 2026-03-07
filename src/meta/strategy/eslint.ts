import type { Rule } from 'eslint'
import type { IOxlintRules, RulesMetaStrategy } from '@/types.ts'

export function EslintRulesMetaConfig(): RulesMetaStrategy {
    return {
        async getRuleMeta(rule: IOxlintRules) {
            const eslintRules = await import('eslint/use-at-your-own-risk')
                .then(r => r.default.builtinRules)

            const rulesMeta = eslintRules.get(rule.value) as Rule.RuleModule

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
