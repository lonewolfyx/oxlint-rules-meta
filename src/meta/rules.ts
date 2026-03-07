import type { IOxlintRules, LintOptions, RulesMetaStrategy } from '@/types.ts'
import { EslintRulesMetaConfig } from '@/meta/strategy/eslint.ts'

const scopeRules: Record<LintOptions, () => RulesMetaStrategy> = {
    eslint: EslintRulesMetaConfig,
    react: EslintRulesMetaConfig,
    unicorn: EslintRulesMetaConfig,
    typescript: EslintRulesMetaConfig,
    oxc: EslintRulesMetaConfig,
    import: EslintRulesMetaConfig,
    jsdoc: EslintRulesMetaConfig,
    jest: EslintRulesMetaConfig,
    vitest: EslintRulesMetaConfig,
    jsx_a11y: EslintRulesMetaConfig,
    nextjs: EslintRulesMetaConfig,
    react_perf: EslintRulesMetaConfig,
    promise: EslintRulesMetaConfig,
    node: EslintRulesMetaConfig,
    vue: EslintRulesMetaConfig,
}

export class RulesMeta {
    private readonly ruleMetas = scopeRules

    getRuleMeta(rule: IOxlintRules): any {
        const handler = this.ruleMetas[rule.scope]?.()
        return handler.getRuleMeta(rule)
    }
}
