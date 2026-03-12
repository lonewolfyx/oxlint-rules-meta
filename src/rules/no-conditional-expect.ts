export default {
    name: 'no-conditional-expect',
    meta: {
        source: 'jest',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow calling `expect` conditionally',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-conditional-expect.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
