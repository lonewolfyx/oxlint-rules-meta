export default {
    name: 'no-array-sort',
    meta: {
        source: 'unicorn',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Prefer `Array#toSorted()` over `Array#sort()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-sort.html',
            category: 'suspicious',
        },
        fixable: 'fixable_fix',
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
