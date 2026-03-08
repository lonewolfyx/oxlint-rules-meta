export default {
    name: 'anchor-is-valid',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce all anchors are valid, navigable elements.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/anchor-is-valid.html',
            category: 'correctness',
        },
        fixable: 'none',
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
                    specialLink: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                        additionalItems: false,
                    },
                    aspects: {
                        type: 'array',
                        items: {
                            type: 'string',
                            enum: [
                                'noHref',
                                'invalidHref',
                                'preferButton',
                            ],
                        },
                        uniqueItems: true,
                        additionalItems: false,
                        minItems: 1,
                    },
                },
            },
        ],
    },
}
