export default {
    name: 'jsx-no-script-url',
    meta: {
        source: 'react',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow usage of `javascript:` URLs',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-script-url.html',
            category: 'suspicious',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: {
            anyOf: [
                {
                    type: 'array',
                    items: [
                        {
                            type: 'array',
                            uniqueItems: true,
                            items: {
                                type: 'object',
                                properties: {
                                    name: {
                                        type: 'string',
                                    },
                                    props: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                            uniqueItems: true,
                                        },
                                    },
                                },
                                required: [
                                    'name',
                                    'props',
                                ],
                                additionalProperties: false,
                            },
                        },
                        {
                            type: 'object',
                            properties: {
                                includeFromSettings: {
                                    type: 'boolean',
                                },
                            },
                            additionalItems: false,
                        },
                    ],
                    additionalItems: false,
                },
                {
                    type: 'array',
                    items: [
                        {
                            type: 'object',
                            properties: {
                                includeFromSettings: {
                                    type: 'boolean',
                                },
                            },
                            additionalItems: false,
                        },
                    ],
                    additionalItems: false,
                },
            ],
        },
    },
}
