import type { IOxlintRules, RulesMetaStrategy } from '@/types.ts'
import { importRulesMetaInfo } from '@/meta/rules.ts'

export function ReactPrefRulesMetaConfig(): RulesMetaStrategy {
    return {
        async getRuleMeta(rule: IOxlintRules) {
            return await importRulesMetaInfo(rule, 'eslint-plugin-react-perf')
        },
    }
}
