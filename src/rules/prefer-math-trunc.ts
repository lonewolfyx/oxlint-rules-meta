export default {
    name: 'prefer-math-trunc',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce the use of `Math.trunc` instead of bitwise operators.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-math-trunc.html',
            category: 'pedantic',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
