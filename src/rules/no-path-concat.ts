export default {
    name: 'no-path-concat',
    meta: {
        source: 'node',
        category: 'restriction',
        default: false,
        docs: {
            description: 'disallow string concatenation with `__dirname` and `__filename`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/node/no-path-concat.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
