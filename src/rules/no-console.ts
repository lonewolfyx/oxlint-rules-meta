export default {
    name: 'no-console',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow the use of `console`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-console.html',
            category: 'restriction',
        },
        fixable: 'conditional_suggestion',
        schema: [
            {
                type: 'object',
                properties: {
                    allow: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        minItems: 1,
                        uniqueItems: true,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
