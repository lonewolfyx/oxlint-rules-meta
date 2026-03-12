export default {
    name: 'heading-has-content',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce heading (`h1`, `h2`, etc) elements contain accessible content.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/heading-has-content.html',
            category: 'correctness',
        },
        fixable: 'none',
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
