export default {
    name: 'sort-vars',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Require variables within the same declaration block to be sorted',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-vars.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreCase: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
