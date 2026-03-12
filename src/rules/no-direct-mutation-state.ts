export default {
    name: 'no-direct-mutation-state',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow direct mutation of this.state',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-direct-mutation-state.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
