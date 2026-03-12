export default {
    name: 'no-void',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow `void` operators',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-void.html',
            category: 'restriction',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [
            {
                allowAsStatement: false,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    allowAsStatement: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
