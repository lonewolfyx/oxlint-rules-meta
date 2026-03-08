export default {
    name: 'no-set-state',
    meta: {
        source: 'react',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow usage of setState',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-set-state.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [],
    },
}
