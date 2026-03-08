export default {
    name: 'no-bitwise',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow bitwise operators',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-bitwise.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    allow: {
                        type: 'array',
                        items: {
                            enum: [
                                '^',
                                '|',
                                '&',
                                '<<',
                                '>>',
                                '>>>',
                                '^=',
                                '|=',
                                '&=',
                                '<<=',
                                '>>=',
                                '>>>=',
                                '~',
                            ],
                        },
                        uniqueItems: true,
                    },
                    int32Hint: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
