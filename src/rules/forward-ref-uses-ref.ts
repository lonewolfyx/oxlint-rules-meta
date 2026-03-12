export default {
    name: 'forward-ref-uses-ref',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Require all forwardRef components include a ref parameter',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/forward-ref-uses-ref.html',
            category: 'correctness',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
