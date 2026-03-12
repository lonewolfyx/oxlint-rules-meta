export default {
    name: 'consistent-type-imports',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce consistent usage of type imports',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-imports.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    disallowTypeAnnotations: {
                        type: 'boolean',
                        description: 'Whether to disallow type imports in type annotations (`import()`).',
                    },
                    fixStyle: {
                        type: 'string',
                        description: 'The expected type modifier to be added when an import is detected as used only in the type position.',
                        enum: [
                            'separate-type-imports',
                            'inline-type-imports',
                        ],
                    },
                    prefer: {
                        type: 'string',
                        description: 'The expected import kind for type-only imports.',
                        enum: [
                            'type-imports',
                            'no-type-imports',
                        ],
                    },
                },
            },
        ],
    },
}
