export default {
    name: 'prefer-regexp-exec',
    meta: {
        source: 'typescript',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Enforce `RegExp#exec` over `String#match` if no global flag is provided',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-regexp-exec.html',
            category: 'nursery',
        },
        fixable: 'none',
        schema: [],
    },
}
