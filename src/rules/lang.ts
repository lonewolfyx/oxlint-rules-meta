export default {
    name: 'lang',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce lang attribute has a valid value.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/lang.html',
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
