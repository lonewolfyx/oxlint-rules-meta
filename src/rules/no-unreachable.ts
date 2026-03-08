export default {
    name: 'no-unreachable',
    meta: {
        source: 'eslint',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unreachable.html',
            category: 'nursery',
        },
        fixable: 'none',
        schema: [],
    },
}
