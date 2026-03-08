export default {
    name: 'no-alert',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow the use of `alert`, `confirm`, and `prompt`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-alert.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [],
    },
}
