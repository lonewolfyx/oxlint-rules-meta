export default {
    name: 'no-array-index-key',
    meta: {
        source: 'react',
        category: 'perf',
        default: false,
        docs: {
            description: 'Disallow usage of Array index in keys',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-array-index-key.html',
            category: 'perf',
        },
        fixable: 'none',
        schema: [],
    },
}
