import type { IOxlintRules, RulesMetaStrategy } from '@/types.ts'

export function EslintRulesMetaConfig(): RulesMetaStrategy {
    return {
        getRuleMeta(rule: IOxlintRules) {
            return rule.scope
        },
    }
}
