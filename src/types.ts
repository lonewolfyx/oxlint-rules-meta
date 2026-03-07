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

export interface RulesMetaStrategy {
    getRuleMeta: (rule: IOxlintRules) => Promise<any>
}
