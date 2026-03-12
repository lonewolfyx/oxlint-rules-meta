export default {
    name: 'no-misleading-character-class',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow characters which are made with multiple code points in character class syntax',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-misleading-character-class.html',
            category: 'correctness',
        },
        fixable: 'pending',
        defaultOptions: [
            {
                allowEscape: false,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    allowEscape: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
