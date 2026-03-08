export default {
    name: 'capitalized-comments',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce or disallow capitalization of the first letter of a comment',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/capitalized-comments.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [
            {
                enum: [
                    'always',
                    'never',
                ],
            },
            {
                oneOf: [
                    {
                        type: 'object',
                        properties: {
                            ignorePattern: {
                                type: 'string',
                            },
                            ignoreInlineComments: {
                                type: 'boolean',
                            },
                            ignoreConsecutiveComments: {
                                type: 'boolean',
                            },
                        },
                        additionalProperties: false,
                    },
                    {
                        type: 'object',
                        properties: {
                            line: {
                                type: 'object',
                                properties: {
                                    ignorePattern: {
                                        type: 'string',
                                    },
                                    ignoreInlineComments: {
                                        type: 'boolean',
                                    },
                                    ignoreConsecutiveComments: {
                                        type: 'boolean',
                                    },
                                },
                                additionalProperties: false,
                            },
                            block: {
                                type: 'object',
                                properties: {
                                    ignorePattern: {
                                        type: 'string',
                                    },
                                    ignoreInlineComments: {
                                        type: 'boolean',
                                    },
                                    ignoreConsecutiveComments: {
                                        type: 'boolean',
                                    },
                                },
                                additionalProperties: false,
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
        ],
    },
}
