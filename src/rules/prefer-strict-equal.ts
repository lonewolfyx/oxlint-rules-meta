export default {
    name: 'prefer-strict-equal',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Suggest using `toStrictEqual()`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-strict-equal.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
