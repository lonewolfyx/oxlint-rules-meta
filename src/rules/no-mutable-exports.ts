export default {
    name: 'no-mutable-exports',
    meta: {
        source: 'import',
        category: 'style',
        default: false,
        docs: {
            description: 'Forbid the use of mutable exports with `var` or `let`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-mutable-exports.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [],
    },
}
