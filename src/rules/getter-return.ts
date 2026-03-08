export default {
    name: 'getter-return',
    meta: {
        source: 'eslint',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Enforce `return` statements in getters',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/getter-return.html',
            category: 'nursery',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    allowImplicit: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
