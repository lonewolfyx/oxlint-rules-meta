export default {
    name: 'prefer-tag-over-role',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforces using semantic DOM elements over the ARIA `role` property.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/prefer-tag-over-role.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {},
            },
        ],
    },
}
