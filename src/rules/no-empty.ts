export default {
    name: 'no-empty',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow empty block statements',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty.html',
            category: 'restriction',
        },
        fixable: 'fixable_suggestion',
        schema: [
            {
                type: 'object',
                properties: {
                    allowEmptyCatch: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
