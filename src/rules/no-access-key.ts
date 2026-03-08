export default {
    name: 'no-access-key',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screen reader.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-access-key.html',
            category: 'correctness',
        },
        fixable: 'fixable_suggestion',
        schema: [
            {
                type: 'object',
                properties: {},
            },
        ],
    },
}
