export default {
    name: 'no-param-reassign',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow reassigning function parameters',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-param-reassign.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                oneOf: [
                    {
                        type: 'object',
                        properties: {
                            props: {
                                enum: [
                                    false,
                                ],
                            },
                        },
                        additionalProperties: false,
                    },
                    {
                        type: 'object',
                        properties: {
                            props: {
                                enum: [
                                    true,
                                ],
                            },
                            ignorePropertyModificationsFor: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                },
                                uniqueItems: true,
                            },
                            ignorePropertyModificationsForRegex: {
                                type: 'array',
                                items: {
                                    type: 'string',
                                },
                                uniqueItems: true,
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
        ],
    },
}
