export default {
    name: 'no-sequences',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow comma operators',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-sequences.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [
            {
                allowInParentheses: true,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    allowInParentheses: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
