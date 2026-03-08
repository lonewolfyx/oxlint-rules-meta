export default {
    name: 'aria-proptypes',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce ARIA state and property values are valid.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-proptypes.html',
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
