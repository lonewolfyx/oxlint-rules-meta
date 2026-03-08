export default {
    name: 'no-is-mounted',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow usage of isMounted',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-is-mounted.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
