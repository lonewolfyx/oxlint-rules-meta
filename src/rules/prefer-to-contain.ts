export default {
    name: 'prefer-to-contain',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Suggest using `toContain()`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-to-contain.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
