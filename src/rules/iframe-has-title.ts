export default {
    name: 'iframe-has-title',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce iframe elements have a title attribute.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/iframe-has-title.html',
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
