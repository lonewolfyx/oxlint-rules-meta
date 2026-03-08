export default {
    name: 'jsx-handler-names',
    meta: {
        source: 'react',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce event handler naming conventions in JSX',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-handler-names.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                anyOf: [
                    {
                        type: 'object',
                        properties: {
                            eventHandlerPrefix: {
                                type: 'string',
                            },
                            eventHandlerPropPrefix: {
                                type: 'string',
                            },
                            checkLocalVariables: {
                                type: 'boolean',
                            },
                            checkInlineFunction: {
                                type: 'boolean',
                            },
                            ignoreComponentNames: {
                                type: 'array',
                                uniqueItems: true,
                                items: {
                                    type: 'string',
                                },
                            },
                        },
                        additionalProperties: false,
                    },
                    {
                        type: 'object',
                        properties: {
                            eventHandlerPrefix: {
                                type: 'string',
                            },
                            eventHandlerPropPrefix: {
                                type: 'boolean',
                                enum: [
                                    false,
                                ],
                            },
                            checkLocalVariables: {
                                type: 'boolean',
                            },
                            checkInlineFunction: {
                                type: 'boolean',
                            },
                            ignoreComponentNames: {
                                type: 'array',
                                uniqueItems: true,
                                items: {
                                    type: 'string',
                                },
                            },
                        },
                        additionalProperties: false,
                    },
                    {
                        type: 'object',
                        properties: {
                            eventHandlerPrefix: {
                                type: 'boolean',
                                enum: [
                                    false,
                                ],
                            },
                            eventHandlerPropPrefix: {
                                type: 'string',
                            },
                            checkLocalVariables: {
                                type: 'boolean',
                            },
                            checkInlineFunction: {
                                type: 'boolean',
                            },
                            ignoreComponentNames: {
                                type: 'array',
                                uniqueItems: true,
                                items: {
                                    type: 'string',
                                },
                            },
                        },
                        additionalProperties: false,
                    },
                    {
                        type: 'object',
                        properties: {
                            checkLocalVariables: {
                                type: 'boolean',
                            },
                        },
                        additionalProperties: false,
                    },
                    {
                        type: 'object',
                        properties: {
                            checkInlineFunction: {
                                type: 'boolean',
                            },
                        },
                        additionalProperties: false,
                    },
                    {
                        type: 'object',
                        properties: {
                            ignoreComponentNames: {
                                type: 'array',
                                uniqueItems: true,
                                items: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                ],
            },
        ],
    },
}
