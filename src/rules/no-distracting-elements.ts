export default {
    name: 'no-distracting-elements',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce distracting elements are not used.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-distracting-elements.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    elements: {
                        type: 'array',
                        items: {
                            type: 'string',
                            enum: [
                                'marquee',
                                'blink',
                            ],
                        },
                        uniqueItems: true,
                        additionalItems: false,
                        minItems: 0,
                    },
                },
            },
        ],
    },
}
