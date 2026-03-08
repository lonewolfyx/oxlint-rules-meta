export default {
    name: 'prefer-at',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer `.at()` method for index access and `String#charAt()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-at.html',
            category: 'pedantic',
        },
        fixable: 'fixable_dangerous_fix',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    getLastElementFunctions: {
                        type: 'array',
                        uniqueItems: true,
                    },
                    checkAllIndexAccess: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
}
