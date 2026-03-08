import type { IOxlintRules } from '@/types.ts'
import { readFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { OXC_WEBSITE_PATH } from '@/path.ts'

export type Awaitable<T> = T | Promise<T>

export async function interopDefault<T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
    const resolved = await m
    return (resolved as any).default || resolved
}

export function capitalizeFirstLetter(str: string) {
    if (!str)
        return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export async function getRuleMarkDownContent(rule: IOxlintRules) {
    const RULES_GLOB_DIR = join('..', 'oxc-project-website', 'src', 'docs', 'guide', 'usage', 'linter', 'rules')

    return await readFile(resolve(OXC_WEBSITE_PATH, `${RULES_GLOB_DIR}/${rule.scope}/${rule.value}.md`), 'utf-8')
}

export function toConfigObject<const T extends readonly object[]>(data: T) {
    return Object.fromEntries(
        data.map((item: any) => [item.name, item.type]),
    )
}
