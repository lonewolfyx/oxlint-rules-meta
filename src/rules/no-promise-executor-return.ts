export default {
    name: 'no-promise-executor-return',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow returning values from Promise executor functions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-promise-executor-return.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        defaultOptions: [
            {
                allowVoid: false,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    allowVoid: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
