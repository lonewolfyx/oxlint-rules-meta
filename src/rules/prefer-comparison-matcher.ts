export default {
    name: 'prefer-comparison-matcher',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Suggest using the built-in comparison matchers',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-comparison-matcher.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
