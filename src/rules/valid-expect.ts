export default {
    name: 'valid-expect',
    meta: {
        source: 'jest',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce valid `expect()` usage',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/valid-expect.html',
            category: 'correctness',
        },
        fixable: 'pending',
        schema: [
            {
                type: 'object',
                properties: {
                    alwaysAwait: {
                        type: 'boolean',
                        default: false,
                    },
                    asyncMatchers: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    minArgs: {
                        type: 'number',
                        minimum: 0,
                    },
                    maxArgs: {
                        type: 'number',
                        minimum: 1,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
