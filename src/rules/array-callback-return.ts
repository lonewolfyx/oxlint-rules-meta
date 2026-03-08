export default {
    name: 'array-callback-return',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce `return` statements in callbacks of array methods',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/array-callback-return.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        schema: [
            {
                type: 'object',
                properties: {
                    allowImplicit: {
                        type: 'boolean',
                    },
                    checkForEach: {
                        type: 'boolean',
                    },
                    allowVoid: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
