export default {
    name: 'id-length',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce minimum and maximum identifier lengths',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/id-length.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    min: {
                        type: 'integer',
                    },
                    max: {
                        type: 'integer',
                    },
                    exceptions: {
                        type: 'array',
                        uniqueItems: true,
                        items: {
                            type: 'string',
                        },
                    },
                    exceptionPatterns: {
                        type: 'array',
                        uniqueItems: true,
                        items: {
                            type: 'string',
                        },
                    },
                    properties: {
                        enum: [
                            'always',
                            'never',
                        ],
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
