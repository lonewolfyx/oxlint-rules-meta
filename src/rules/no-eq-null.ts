export default {
    name: 'no-eq-null',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow `null` comparisons without type-checking operators',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-eq-null.html',
            category: 'restriction',
        },
        fixable: 'fixable_dangerous_fix',
        schema: [],
    },
}
