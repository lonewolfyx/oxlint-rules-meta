export default {
    name: 'prefer-exponentiation-operator',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow the use of `Math.pow` in favor of the `**` operator',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-exponentiation-operator.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
