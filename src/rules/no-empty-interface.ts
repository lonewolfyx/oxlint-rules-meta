export default {
    name: 'no-empty-interface',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow the declaration of empty interfaces',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-empty-interface.html',
            category: 'style',
        },
        fixable: 'pending',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowSingleExtends: {
                        type: 'boolean',
                        description: 'Whether to allow empty interfaces that extend a single other interface.',
                    },
                },
            },
        ],
    },
}
