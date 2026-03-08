export default {
    name: 'no-disabled-tests',
    meta: {
        source: 'jest',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow disabled tests',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-disabled-tests.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
