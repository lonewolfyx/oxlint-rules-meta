export default {
    name: 'role-supports-aria-props',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/role-supports-aria-props.html',
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
