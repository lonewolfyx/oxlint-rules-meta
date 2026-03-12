export default {
    name: 'bad-replace-all-arg',
    meta: {
        source: 'oxc',
        category: 'correctness',
        default: true,
        description: 'This rule warns when the replaceAll method is called with a regular expression that does not have the global flag (g).',
        docs: {
            description: 'This rule warns when the replaceAll method is called with a regular expression that does not have the global flag (g).',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-replace-all-arg.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
