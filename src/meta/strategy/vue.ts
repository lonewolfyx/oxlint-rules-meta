import type { IOxlintRules, RulesMetaStrategy } from '@/types.ts'
import { interopDefault } from '@/utils.ts'

export function VueRulesMetaConfig(): RulesMetaStrategy {
    return {
        async getRuleMeta(rule: IOxlintRules) {
            const unicornRules = await interopDefault(import('eslint-plugin-vue'))
            const rulesMeta = unicornRules.rules[rule.value as keyof typeof unicornRules.rules]

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
