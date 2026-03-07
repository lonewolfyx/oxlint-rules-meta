import type { IOxlintRules, LintOptions, RulesMetaStrategy } from '@/types.ts'
import { EslintRulesMetaConfig } from '@/meta/strategy/eslint.ts'
import { ImportRulesMetaConfig } from '@/meta/strategy/import.ts'
import { JestRulesMetaConfig } from '@/meta/strategy/jest.ts'
import { JsDocRulesMetaConfig } from '@/meta/strategy/jsdoc.ts'
import { OXCRulesMetaConfig } from '@/meta/strategy/oxc.ts'
import { ReactRulesMetaConfig } from '@/meta/strategy/react.ts'
import { TypeScriptRulesMetaConfig } from '@/meta/strategy/typescript.ts'
import { UnicornRulesMetaConfig } from '@/meta/strategy/unicorn.ts'

const scopeRules: Record<LintOptions, () => RulesMetaStrategy> = {
    eslint: EslintRulesMetaConfig,
    typescript: TypeScriptRulesMetaConfig,
    oxc: OXCRulesMetaConfig,
    react: ReactRulesMetaConfig,
    unicorn: UnicornRulesMetaConfig,
    import: ImportRulesMetaConfig,
    jsdoc: JsDocRulesMetaConfig,
    jest: JestRulesMetaConfig,
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
