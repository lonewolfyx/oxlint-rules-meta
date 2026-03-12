export default {
    name: 'no-empty-pattern',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow empty destructuring patterns',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-pattern.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [
            {
                allowObjectPatternsAsParameters: false,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    allowObjectPatternsAsParameters: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
