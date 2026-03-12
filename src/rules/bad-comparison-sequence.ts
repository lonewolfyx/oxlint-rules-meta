export default {
    name: 'bad-comparison-sequence',
    meta: {
        source: 'oxc',
        category: 'correctness',
        default: true,
        description: 'This rule applies when the comparison operator is applied two or more times in a row.',
        docs: {
            description: 'This rule applies when the comparison operator is applied two or more times in a row.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-comparison-sequence.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
