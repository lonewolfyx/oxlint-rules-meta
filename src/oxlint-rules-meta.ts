import type { IOxlintRules } from './types.ts'
import { x } from 'tinyexec'
import { RulesMeta } from '@/meta/rules.ts'

async function main() {
    const rulesMeta = new RulesMeta()
    const oxlintCommandResult = await x('oxlint', ['--rules', '-f', 'json'])
    const oxlintRules = JSON.parse(oxlintCommandResult.stdout) as IOxlintRules[]

    // why? see https://oxc.rs/docs/guide/usage/linter/plugins.html#supported-plugins
    for (const rule of oxlintRules) {
        if (rule.scope !== 'oxc') {
            continue
        }
        console.log(rulesMeta.getRuleMeta(rule))
    }
    // const eslintRules = await import('eslint/use-at-your-own-risk').then(r => r.default.builtinRules)
    // for (const [name, rule] of eslintRules.entries()) {
    //     console.log(name, JSON.stringify(rule.meta, null, 2))
    // }
}

main().then(() => {
})
