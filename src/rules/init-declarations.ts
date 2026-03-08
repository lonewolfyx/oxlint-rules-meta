export default {
    name: 'init-declarations',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Require or disallow initialization in variable declarations',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/init-declarations.html',
            category: 'style',
        },
        fixable: 'none',
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
                    ],
                    minItems: 0,
                    maxItems: 1,
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
                            properties: {
                                ignoreForLoopInit: {
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
