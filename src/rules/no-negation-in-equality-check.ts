export default {
    name: 'no-negation-in-equality-check',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow negated expression in equality check.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-negation-in-equality-check.html',
            category: 'pedantic',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
