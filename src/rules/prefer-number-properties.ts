export default {
    name: 'prefer-number-properties',
    meta: {
        source: 'unicorn',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Prefer `Number` static properties over global ones.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-number-properties.html',
            category: 'restriction',
        },
        fixable: 'fixable_dangerous_fix',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    checkInfinity: {
                        type: 'boolean',
                    },
                    checkNaN: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
}
