export default {
    name: 'no-done-callback',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow using a callback in asynchronous tests and hooks',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-done-callback.html',
            category: 'style',
        },
        fixable: 'pending',
        schema: [],
    },
}
