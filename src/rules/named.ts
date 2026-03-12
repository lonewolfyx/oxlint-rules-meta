export default {
    name: 'named',
    meta: {
        source: 'import',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Ensure named imports correspond to a named export in the remote file.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/named.html',
            category: 'nursery',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    commonjs: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
