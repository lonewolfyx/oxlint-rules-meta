import type { IOxlintRules, RulesMetaStrategy } from '@/types.ts'
import { importRulesMetaInfo } from '@/meta/rules.ts'

export function NextjsRulesMetaConfig(): RulesMetaStrategy {
    return {
        async getRuleMeta(rule: IOxlintRules) {
            return await importRulesMetaInfo(rule, '@next/eslint-plugin-next')
        },
    }
}
