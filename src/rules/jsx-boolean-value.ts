export default {
    name: 'jsx-boolean-value',
    meta: {
        source: 'react',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce boolean attributes notation in JSX',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-boolean-value.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: {
            anyOf: [
                {
                    type: 'array',
                    items: [
                        {
                            enum: [
                                'always',
                                'never',
                            ],
                        },
                    ],
                    additionalItems: false,
                },
                {
                    type: 'array',
                    items: [
                        {
                            enum: [
                                'always',
                            ],
                        },
                        {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                                never: {
                                    type: 'array',
                                    items: {
                                        type: 'string',
                                        minLength: 1,
                                    },
                                    uniqueItems: true,
                                },
                                assumeUndefinedIsFalse: {
                                    type: 'boolean',
                                },
                            },
                        },
                    ],
                    additionalItems: false,
                },
                {
                    type: 'array',
                    items: [
                        {
                            enum: [
                                'never',
                            ],
                        },
                        {
                            type: 'object',
                            additionalProperties: false,
                            properties: {
                                always: {
                                    type: 'array',
                                    items: {
                                        type: 'string',
                                        minLength: 1,
                                    },
                                    uniqueItems: true,
                                },
                                assumeUndefinedIsFalse: {
                                    type: 'boolean',
                                },
                            },
                        },
                    ],
                    additionalItems: false,
                },
            ],
        },
    },
}
