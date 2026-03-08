export default {
    name: 'number-arg-out-of-range',
    meta: {
        source: 'oxc',
        category: 'correctness',
        default: true,
        description: 'Checks whether the radix or precision arguments of number-related functions exceeds the limit.',
        docs: {
            description: 'Checks whether the radix or precision arguments of number-related functions exceeds the limit.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/number-arg-out-of-range.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
