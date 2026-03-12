export default {
    name: 'func-style',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce the consistent use of either `function` declarations or expressions assigned to variables',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-style.html',
            category: 'style',
        },
        fixable: 'pending',
        defaultOptions: [
            'expression',
            {
                allowArrowFunctions: false,
                allowTypeAnnotation: false,
                overrides: {},
            },
        ],
        schema: [
            {
                enum: [
                    'declaration',
                    'expression',
                ],
            },
            {
                type: 'object',
                properties: {
                    allowArrowFunctions: {
                        type: 'boolean',
                    },
                    allowTypeAnnotation: {
                        type: 'boolean',
                    },
                    overrides: {
                        type: 'object',
                        properties: {
                            namedExports: {
                                enum: [
                                    'declaration',
                                    'expression',
                                    'ignore',
                                ],
                            },
                        },
                        additionalProperties: false,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
