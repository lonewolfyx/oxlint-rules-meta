export default {
    name: 'no-array-reverse',
    meta: {
        source: 'unicorn',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Prefer `Array#toReversed()` over `Array#reverse()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-reverse.html',
            category: 'suspicious',
        },
        fixable: 'fixable_fix',
        defaultOptions: [
            {
                allowExpressionStatement: true,
            },
        ],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowExpressionStatement: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
}
