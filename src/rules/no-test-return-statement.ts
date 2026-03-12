export default {
    name: 'no-test-return-statement',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow explicitly returning from tests',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-test-return-statement.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
