export default {
    name: 'no-render-return-value',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow usage of the return value of ReactDOM.render',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-render-return-value.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
