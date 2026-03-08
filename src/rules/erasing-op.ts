export default {
    name: 'erasing-op',
    meta: {
        source: 'oxc',
        category: 'correctness',
        default: true,
        description: 'Checks for erasing operations, e.g., x * 0.',
        docs: {
            description: 'Checks for erasing operations, e.g., x * 0.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/erasing-op.html',
            category: 'correctness',
        },
        fixable: 'fixable_dangerous_fix',
        schema: [],
    },
}
