export default {
    name: 'jsx-props-no-spreading',
    meta: {
        source: 'react',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow JSX prop spreading',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-props-no-spreading.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                allOf: [
                    {
                        type: 'object',
                        properties: {
                            html: {
                                enum: [
                                    'enforce',
                                    'ignore',
                                ],
                            },
                            custom: {
                                enum: [
                                    'enforce',
                                    'ignore',
                                ],
                            },
                            explicitSpread: {
                                enum: [
                                    'enforce',
                                    'ignore',
                                ],
                            },
                            exceptions: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                    uniqueItems: true,
                                },
                            },
                        },
                    },
                    {
                        not: {
                            type: 'object',
                            required: [
                                'html',
                                'custom',
                            ],
                            properties: {
                                html: {
                                    enum: [
                                        'ignore',
                                    ],
                                },
                                custom: {
                                    enum: [
                                        'ignore',
                                    ],
                                },
                                exceptions: {
                                    type: 'array',
                                    minItems: 0,
                                    maxItems: 0,
                                },
                            },
                        },
                    },
                ],
            },
        ],
    },
}
