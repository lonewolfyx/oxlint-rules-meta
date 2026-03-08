export default {
    name: 'scope',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce `scope` prop is only used on `<th>` elements.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/scope.html',
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
