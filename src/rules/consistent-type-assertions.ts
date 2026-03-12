export default {
    name: 'consistent-type-assertions',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce consistent usage of type assertions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-assertions.html',
            category: 'style',
        },
        fixable: 'conditional_safe_fix_or_suggestion',
        defaultOptions: [],
        schema: [
            {
                oneOf: [
                    {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                            assertionStyle: {
                                type: 'string',
                                description: 'The expected assertion style to enforce.',
                                enum: [
                                    'never',
                                ],
                            },
                        },
                        required: [
                            'assertionStyle',
                        ],
                    },
                    {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                            arrayLiteralTypeAssertions: {
                                type: 'string',
                                description: 'Whether to always prefer type declarations for array literals used as variable initializers, rather than type assertions.',
                                enum: [
                                    'allow',
                                    'allow-as-parameter',
                                    'never',
                                ],
                            },
                            assertionStyle: {
                                type: 'string',
                                description: 'The expected assertion style to enforce.',
                                enum: [
                                    'as',
                                    'angle-bracket',
                                ],
                            },
                            objectLiteralTypeAssertions: {
                                type: 'string',
                                description: 'Whether to always prefer type declarations for object literals used as variable initializers, rather than type assertions.',
                                enum: [
                                    'allow',
                                    'allow-as-parameter',
                                    'never',
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
}
