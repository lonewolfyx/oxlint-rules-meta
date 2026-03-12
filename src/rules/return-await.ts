export default {
    name: 'return-await',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce consistent awaiting of returned promises',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/return-await.html',
            category: 'pedantic',
        },
        fixable: 'fixable_safe_fix_or_suggestion',
        defaultOptions: [],
        schema: [
            {
                type: 'string',
                oneOf: [
                    {
                        type: 'string',
                        description: 'Requires that all returned promises be awaited.',
                        enum: [
                            'always',
                        ],
                    },
                    {
                        type: 'string',
                        description: 'In error-handling contexts, the rule enforces that returned promises must be awaited. In ordinary contexts, the rule does not enforce any particular behavior around whether returned promises are awaited.',
                        enum: [
                            'error-handling-correctness-only',
                        ],
                    },
                    {
                        type: 'string',
                        description: 'In error-handling contexts, the rule enforces that returned promises must be awaited. In ordinary contexts, the rule enforces that returned promises _must not_ be awaited.',
                        enum: [
                            'in-try-catch',
                        ],
                    },
                    {
                        type: 'string',
                        description: 'Disallows awaiting any returned promises.',
                        enum: [
                            'never',
                        ],
                    },
                ],
            },
        ],
    },
}
