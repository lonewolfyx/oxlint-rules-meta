export default {
    name: 'prefer-lowercase-title',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce lowercase test names',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-lowercase-title.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    ignore: {
                        type: 'array',
                        items: {
                            type: 'string',
                            enum: [
                                'describe',
                                'test',
                                'it',
                            ],
                        },
                        additionalItems: false,
                    },
                    allowedPrefixes: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        additionalItems: false,
                    },
                    ignoreTopLevelDescribe: {
                        type: 'boolean',
                        default: false,
                    },
                    ignoreTodos: {
                        type: 'boolean',
                        default: false,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
