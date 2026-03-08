export default {
    name: 'no-namespace',
    meta: {
        source: 'typescript',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow TypeScript namespaces',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-namespace.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowDeclarations: {
                        type: 'boolean',
                        description: 'Whether to allow `declare` with custom TypeScript namespaces.',
                    },
                    allowDefinitionFiles: {
                        type: 'boolean',
                        description: 'Whether to allow `declare` with custom TypeScript namespaces inside definition files.',
                    },
                },
            },
        ],
    },
}
