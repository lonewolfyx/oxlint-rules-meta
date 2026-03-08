export default {
    name: 'no-duplicate-imports',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow duplicate module imports',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-duplicate-imports.html',
            category: 'style',
        },
        fixable: 'pending',
        schema: [
            {
                type: 'object',
                properties: {
                    includeExports: {
                        type: 'boolean',
                    },
                    allowSeparateTypeImports: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
