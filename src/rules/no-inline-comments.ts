export default {
    name: 'no-inline-comments',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow inline comments after code',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-inline-comments.html',
            category: 'pedantic',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    ignorePattern: {
                        type: 'string',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
