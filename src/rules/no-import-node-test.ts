export default {
    name: 'no-import-node-test',
    meta: {
        source: 'vitest',
        category: 'style',
        default: false,
        docs: {
            description: 'disallow importing `node:test`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vitest/no-import-node-test.html',
            category: 'style',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
