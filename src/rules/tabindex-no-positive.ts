export default {
    name: 'tabindex-no-positive',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce `tabIndex` value is not greater than zero.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/tabindex-no-positive.html',
            category: 'correctness',
        },
        fixable: 'fixable_dangerous_suggestion',
        schema: [
            {
                type: 'object',
                properties: {},
            },
        ],
    },
}
