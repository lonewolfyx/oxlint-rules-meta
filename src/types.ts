import type { JSONSchema4 } from 'json-schema'

export type LintOptions
    = 'eslint'
        | 'react'
        | 'unicorn'
        | 'typescript'
        | 'oxc'
        | 'import'
        | 'jsdoc'
        | 'jest'
        | 'vitest'
        | 'jsx_a11y'
        | 'nextjs'
        | 'react_perf'
        | 'promise'
        | 'node'
        | 'vue'

export interface IOxlintRules {
    scope: LintOptions
    value: string
    category: string
    type_aware: boolean
    fix: string
    default: boolean
    docs_url: string
}

export interface IRulesMetaDocs {
    description?: string
    url?: string
    category?: string
}

export interface IRulesMeta {
    name: string
    meta: {
        source: string
        category: string
        default: boolean
        docs?: IRulesMetaDocs
        fixable: string
        schema: JSONSchema4 | JSONSchema4[] | []
    }
}

export interface RulesMetaStrategy {
    getRuleMeta: (rule: IOxlintRules) => Promise<IRulesMeta>
}
