export default {
    name: 'no-new',
    meta: {
        source: 'eslint',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow `new` operators outside of assignments or comparisons',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new.html',
            category: 'suspicious',
        },
        fixable: 'none',
        schema: [],
    },
}
