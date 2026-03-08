export default {
    name: 'no-shadow-restricted-names',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow identifiers from shadowing restricted names',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-shadow-restricted-names.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    reportGlobalThis: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
