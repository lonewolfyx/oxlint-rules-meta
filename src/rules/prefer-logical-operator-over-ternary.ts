export default {
    name: 'prefer-logical-operator-over-ternary',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer using a logical operator over a ternary.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-logical-operator-over-ternary.html',
            category: 'style',
        },
        fixable: 'fixable_suggestion',
        schema: [],
    },
}
