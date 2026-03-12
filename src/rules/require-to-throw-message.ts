export default {
    name: 'require-to-throw-message',
    meta: {
        source: 'jest',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Require a message for `toThrow()`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/require-to-throw-message.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
