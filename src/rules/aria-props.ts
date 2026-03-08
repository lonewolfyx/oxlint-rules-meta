export default {
    name: 'aria-props',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce all `aria-*` props are valid.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-props.html',
            category: 'correctness',
        },
        fixable: 'conditional_fix',
        schema: [
            {
                type: 'object',
                properties: {},
            },
        ],
    },
}
