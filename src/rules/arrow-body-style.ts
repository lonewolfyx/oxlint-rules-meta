export default {
    name: 'arrow-body-style',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Require braces around arrow function bodies',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/arrow-body-style.html',
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
                    minItems: 0,
                    maxItems: 1,
                },
                {
                    type: 'array',
                    items: [
                        {
                            enum: [
                                'as-needed',
                            ],
                        },
                        {
                            type: 'object',
                            properties: {
                                requireReturnForObjectLiteral: {
                                    type: 'boolean',
                                },
                            },
                            additionalProperties: false,
                        },
                    ],
                    minItems: 0,
                    maxItems: 2,
                },
            ],
        },
    },
}
