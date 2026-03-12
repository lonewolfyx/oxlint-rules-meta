export default {
    name: 'no-useless-escape',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow unnecessary escape characters',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-escape.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        defaultOptions: [
            {
                allowRegexCharacters: [],
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    allowRegexCharacters: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
