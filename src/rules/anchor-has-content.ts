export default {
    name: 'anchor-has-content',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce all anchors to contain accessible content.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/anchor-has-content.html',
            category: 'correctness',
        },
        fixable: 'conditional_suggestion',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    components: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                        additionalItems: false,
                    },
                },
            },
        ],
    },
}
