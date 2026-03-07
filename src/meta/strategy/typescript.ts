import type { IOxlintRules, RulesMetaStrategy } from '@/types.ts'
import { importRulesMetaInfo } from '@/meta/rules.ts'

export function TypeScriptRulesMetaConfig(): RulesMetaStrategy {
    return {
        async getRuleMeta(rule: IOxlintRules) {
            return await importRulesMetaInfo(rule, '@typescript-eslint/eslint-plugin')
        },
    }
}
