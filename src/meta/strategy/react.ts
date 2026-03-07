import type { IOxlintRules, RulesMetaStrategy } from '@/types.ts'
import { interopDefault } from '@/utils.ts'

export function ReactRulesMetaConfig(): RulesMetaStrategy {
    return {
        async getRuleMeta(rule: IOxlintRules) {
            const reactRules = await interopDefault(import('eslint-plugin-react'))
            const reactHooksRules = await interopDefault(import('eslint-plugin-react-hooks'))
            const rules = { ...reactRules.rules, ...reactHooksRules.rules }

            // eslint-disable-next-line ts/ban-ts-comment
            // @ts-expect-error
            const rulesMeta = rules[rule.value]

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
