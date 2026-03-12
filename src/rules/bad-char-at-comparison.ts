export default {
    name: 'bad-char-at-comparison',
    meta: {
        source: 'oxc',
        category: 'correctness',
        default: true,
        description: 'This rule warns when the return value of the charAt method is used to compare a string of length greater than 1.',
        docs: {
            description: 'This rule warns when the return value of the charAt method is used to compare a string of length greater than 1.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-char-at-comparison.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
