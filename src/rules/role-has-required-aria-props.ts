export default {
    name: 'role-has-required-aria-props',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce that elements with ARIA roles must have all required attributes for that role.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/role-has-required-aria-props.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {},
            },
        ],
    },
}
