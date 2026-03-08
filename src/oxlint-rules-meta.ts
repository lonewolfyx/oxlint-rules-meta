import type { IOxlintRules } from './types.ts'
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { x } from 'tinyexec'
import { RulesMeta } from '@/meta/rules.ts'
import { OXC_WEBSITE_PATH } from '@/path.ts'
import { capitalizeFirstLetter } from '@/utils.ts'

async function main() {
    const rulesMeta = new RulesMeta()
    const oxlintCommandResult = await x('oxlint', ['--rules', '-f', 'json'])
    const oxlintRules = JSON.parse(oxlintCommandResult.stdout) as IOxlintRules[]
    // console.log(oxlintRules.map(r => fs.existsSync(resolve(OXC_WEBSITE_PATH, join('rules', `${r.value}.ts`))) ? null : r.value).filter(Boolean))
    const oxLintRulesMeta = new Map()

    // why? see https://oxc.rs/docs/guide/usage/linter/plugins.html#supported-plugins
    for (const rule of oxlintRules) {
        oxLintRulesMeta.set(rule.value, await rulesMeta.getRuleMeta(rule))
    }

    const rulesPath = resolve(OXC_WEBSITE_PATH, 'rules')
    await mkdir(rulesPath, { recursive: true })
    const exports = new Map<string, {
        rule: string
        name: string
        export: string
        import: string
    }>()
    for (const [name, rule] of oxLintRulesMeta.entries()) {
        await writeFile(
            resolve(rulesPath, `${name}.ts`),
            `export default ${JSON.stringify(rule, null, 4)}`,
        )
        const alias = [rule.meta.source, ...name.split('-')]
            .map(r => capitalizeFirstLetter(r))
            .join('')

        exports.set(name, {
            rule: name,
            name: alias,
            export: `export { default as ${alias} } from './${name}.ts'`,
            import: `import ${alias} from './${name}.ts'`,
        })
        // console.log(name, JSON.stringify(rule.meta, null, 2))
    }

    const newRuleContent = `${Array.from(exports.values(), r => r.import).join('\n')}

${Array.from(exports.values(), r => r.export).join('\n')}

export const oxlintRuleMeta = {
    ${Array.from(exports.values(), r => `    '${r.rule}': ${r.name}`).join(',\n')}
}
`
    await writeFile(
        resolve(rulesPath, `index.ts`),
        newRuleContent,
    )
}

main().then(() => {
})
