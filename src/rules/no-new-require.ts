export default {
    name: 'no-new-require',
    meta: {
        source: 'node',
        category: 'restriction',
        default: false,
        docs: {
            description: 'disallow `new` operators with calls to `require`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/node/no-new-require.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [],
    },
}
