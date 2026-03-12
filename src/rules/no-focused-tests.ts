export default {
    name: 'no-focused-tests',
    meta: {
        source: 'jest',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow focused tests',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-focused-tests.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
