export default {
    name: 'no-import-type-side-effects',
    meta: {
        source: 'typescript',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-import-type-side-effects.html',
            category: 'restriction',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
