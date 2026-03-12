export default {
    name: 'double-comparisons',
    meta: {
        source: 'oxc',
        category: 'correctness',
        default: true,
        description: 'This rule checks for double comparisons in logical expressions.',
        docs: {
            description: 'This rule checks for double comparisons in logical expressions.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/double-comparisons.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
