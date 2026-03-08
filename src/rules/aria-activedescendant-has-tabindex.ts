export default {
    name: 'aria-activedescendant-has-tabindex',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce elements with aria-activedescendant are tabbable.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-activedescendant-has-tabindex.html',
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
