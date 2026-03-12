export default {
    name: 'global-require',
    meta: {
        source: 'node',
        category: 'style',
        default: false,
        docs: {
            description: 'require `require()` calls to be placed at top-level module scope',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/node/global-require.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
