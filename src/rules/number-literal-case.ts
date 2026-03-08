export default {
    name: 'number-literal-case',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce proper case for numeric literals.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/number-literal-case.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    hexadecimalValue: {
                        enum: [
                            'uppercase',
                            'lowercase',
                        ],
                    },
                },
            },
        ],
    },
}
