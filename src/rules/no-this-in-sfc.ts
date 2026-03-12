export default {
    name: 'no-this-in-sfc',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow `this` from being used in stateless functional components',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-this-in-sfc.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
