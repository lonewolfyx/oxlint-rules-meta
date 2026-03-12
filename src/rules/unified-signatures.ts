export default {
    name: 'unified-signatures',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow two overloads that could be unified into one with a union or an optional/rest parameter',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/unified-signatures.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    ignoreDifferentlyNamedParameters: {
                        type: 'boolean',
                        description: 'Whether two parameters with different names at the same index should be considered different even if their types are the same.',
                    },
                    ignoreOverloadsWithDifferentJSDoc: {
                        type: 'boolean',
                        description: 'Whether two overloads with different JSDoc comments should be considered different even if their parameter and return types are the same.',
                    },
                },
            },
        ],
    },
}
