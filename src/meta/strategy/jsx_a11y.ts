import type { IOxlintRules, RulesMetaStrategy } from '@/types.ts'
import { importRulesMetaInfo } from '@/meta/rules.ts'

export function JsxRulesMetaConfig(): RulesMetaStrategy {
    return {
        async getRuleMeta(rule: IOxlintRules) {
            return await importRulesMetaInfo(rule, 'eslint-plugin-jsx-a11y')
        },
    }
}
