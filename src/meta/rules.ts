import type { Rule } from 'eslint'
import type { IOxlintRules, LintOptions, RulesMetaStrategy } from '@/types.ts'
import { EslintRulesMetaConfig } from '@/meta/strategy/eslint.ts'
import { ImportRulesMetaConfig } from '@/meta/strategy/import.ts'
import { JestRulesMetaConfig } from '@/meta/strategy/jest.ts'
import { JsDocRulesMetaConfig } from '@/meta/strategy/jsdoc.ts'
import { JsxRulesMetaConfig } from '@/meta/strategy/jsx_a11y.ts'
import { NextjsRulesMetaConfig } from '@/meta/strategy/nextjs.ts'
import { NodeRulesMetaConfig } from '@/meta/strategy/node.ts'
import { OXCRulesMetaConfig } from '@/meta/strategy/oxc.ts'
import { PromiseRulesMetaConfig } from '@/meta/strategy/promise.ts'
import { ReactRulesMetaConfig } from '@/meta/strategy/react.ts'
import { ReactPrefRulesMetaConfig } from '@/meta/strategy/react_pref.ts'
import { TypeScriptRulesMetaConfig } from '@/meta/strategy/typescript.ts'
import { UnicornRulesMetaConfig } from '@/meta/strategy/unicorn.ts'
import { VitestRulesMetaConfig } from '@/meta/strategy/vitest.ts'
import { VueRulesMetaConfig } from '@/meta/strategy/vue.ts'
import { interopDefault } from '@/utils.ts'

const scopeRules: Record<LintOptions, () => RulesMetaStrategy> = {
    eslint: EslintRulesMetaConfig,
    typescript: TypeScriptRulesMetaConfig,
    oxc: OXCRulesMetaConfig,
    react: ReactRulesMetaConfig,
    unicorn: UnicornRulesMetaConfig,
    import: ImportRulesMetaConfig,
    jsdoc: JsDocRulesMetaConfig,
    jest: JestRulesMetaConfig,
    vitest: VitestRulesMetaConfig,
    jsx_a11y: JsxRulesMetaConfig,
    nextjs: NextjsRulesMetaConfig,
    react_perf: ReactPrefRulesMetaConfig,
    promise: PromiseRulesMetaConfig,
    node: NodeRulesMetaConfig,
    vue: VueRulesMetaConfig,
}

export async function importRulesMetaInfo(rule: IOxlintRules, module: string) {
    const { rules } = await interopDefault(import(module))
    const rulesMeta = rules[rule.value as keyof typeof rules] as Rule.RuleModule

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
}

export class RulesMeta {
    private readonly ruleMetas = scopeRules

    async getRuleMeta(rule: IOxlintRules) {
        const handler = this.ruleMetas[rule.scope]?.()
        return await handler.getRuleMeta(rule)
    }
}
