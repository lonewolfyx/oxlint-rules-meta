export default {
    name: 'eqeqeq',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Require the use of `===` and `!==`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/eqeqeq.html',
            category: 'pedantic',
        },
        fixable: 'conditional_dangerous_fix',
        schema: {
            anyOf: [
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
                            properties: {
                                null: {
                                    enum: [
                                        'always',
                                        'never',
                                        'ignore',
                                    ],
                                },
                            },
                            additionalProperties: false,
                        },
                    ],
                    additionalItems: false,
                },
                {
                    type: 'array',
                    items: [
                        {
                            enum: [
                                'smart',
                                'allow-null',
                            ],
                        },
                    ],
                    additionalItems: false,
                },
            ],
        },
    },
}
