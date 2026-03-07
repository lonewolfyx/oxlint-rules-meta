import type { IOxlintRules, LintOptions, RulesMetaStrategy } from '@/types.ts'
import { EslintRulesMetaConfig } from '@/meta/strategy/eslint.ts'
import { OXCRulesMetaConfig } from '@/meta/strategy/oxc.ts'
import { TypeScriptRulesMetaConfig } from '@/meta/strategy/typescript.ts'

const scopeRules: Record<LintOptions, () => RulesMetaStrategy> = {
    eslint: EslintRulesMetaConfig,
    react: EslintRulesMetaConfig,
    unicorn: EslintRulesMetaConfig,
    typescript: TypeScriptRulesMetaConfig,
    oxc: OXCRulesMetaConfig,
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

    async getRuleMeta(rule: IOxlintRules) {
        const handler = this.ruleMetas[rule.scope]?.()
        return await handler.getRuleMeta(rule)
    }
}
