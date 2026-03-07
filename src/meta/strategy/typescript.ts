import type { IOxlintRules, RulesMetaStrategy } from '@/types.ts'
import { interopDefault } from '@/utils.ts'

export function TypeScriptRulesMetaConfig(): RulesMetaStrategy {
    return {
        async getRuleMeta(rule: IOxlintRules) {
            const typescriptRules = await interopDefault(import('@typescript-eslint/eslint-plugin'))
            const rulesMeta = typescriptRules.rules[rule.value]

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
