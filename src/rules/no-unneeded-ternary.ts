export default {
    name: 'no-unneeded-ternary',
    meta: {
        source: 'eslint',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow ternary operators when simpler alternatives exist',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unneeded-ternary.html',
            category: 'suspicious',
        },
        fixable: 'fixable_dangerous_fix',
        defaultOptions: [
            {
                defaultAssignment: true,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    defaultAssignment: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
