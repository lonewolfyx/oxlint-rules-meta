export default {
    name: 'prefer-destructuring',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Require destructuring from arrays and/or objects',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-destructuring.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        schema: [
            {
                oneOf: [
                    {
                        type: 'object',
                        properties: {
                            VariableDeclarator: {
                                type: 'object',
                                properties: {
                                    array: {
                                        type: 'boolean',
                                    },
                                    object: {
                                        type: 'boolean',
                                    },
                                },
                                additionalProperties: false,
                            },
                            AssignmentExpression: {
                                type: 'object',
                                properties: {
                                    array: {
                                        type: 'boolean',
                                    },
                                    object: {
                                        type: 'boolean',
                                    },
                                },
                                additionalProperties: false,
                            },
                        },
                        additionalProperties: false,
                    },
                    {
                        type: 'object',
                        properties: {
                            array: {
                                type: 'boolean',
                            },
                            object: {
                                type: 'boolean',
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
            {
                type: 'object',
                properties: {
                    enforceForRenamedProperties: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
