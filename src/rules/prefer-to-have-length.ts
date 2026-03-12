export default {
    name: 'prefer-to-have-length',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Suggest using `toHaveLength()`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-to-have-length.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
