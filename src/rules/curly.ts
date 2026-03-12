export default {
    name: 'curly',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce consistent brace style for all control statements',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/curly.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [
            'all',
        ],
        schema: {
            anyOf: [
                {
                    type: 'array',
                    items: [
                        {
                            enum: [
                                'all',
                            ],
                        },
                    ],
                    minItems: 0,
                    maxItems: 1,
                },
                {
                    type: 'array',
                    items: [
                        {
                            enum: [
                                'multi',
                                'multi-line',
                                'multi-or-nest',
                            ],
                        },
                        {
                            enum: [
                                'consistent',
                            ],
                        },
                    ],
                    minItems: 0,
                    maxItems: 2,
                },
            ],
        },
    },
}
