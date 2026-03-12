export default {
    name: 'no-unsafe-unary-minus',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Require unary negation to take a number',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-unary-minus.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
