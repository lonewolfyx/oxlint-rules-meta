export default {
    name: 'block-scoped-var',
    meta: {
        source: 'eslint',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Enforce the use of variables within the scope they are defined',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/block-scoped-var.html',
            category: 'suspicious',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
