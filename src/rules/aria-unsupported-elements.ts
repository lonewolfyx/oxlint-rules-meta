export default {
    name: 'aria-unsupported-elements',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-unsupported-elements.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        schema: [
            {
                type: 'object',
                properties: {},
            },
        ],
    },
}
