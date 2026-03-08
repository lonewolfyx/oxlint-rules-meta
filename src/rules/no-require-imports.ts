export default {
    name: 'no-require-imports',
    meta: {
        source: 'typescript',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow invocation of `require()`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-require-imports.html',
            category: 'restriction',
        },
        fixable: 'pending',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allow: {
                        type: 'array',
                        description: 'Patterns of import paths to allow requiring from.',
                        items: {
                            type: 'string',
                        },
                    },
                    allowAsImport: {
                        type: 'boolean',
                        description: 'Allows `require` statements in import declarations.',
                    },
                },
            },
        ],
    },
}
