export default {
    name: 'consistent-return',
    meta: {
        source: 'typescript',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Require `return` statements to either always or never specify values',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-return.html',
            category: 'nursery',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    treatUndefinedAsUnspecified: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
