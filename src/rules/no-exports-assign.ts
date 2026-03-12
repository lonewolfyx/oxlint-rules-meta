export default {
    name: 'no-exports-assign',
    meta: {
        source: 'node',
        category: 'style',
        default: false,
        docs: {
            description: 'disallow the assignment to `exports`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/node/no-exports-assign.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
