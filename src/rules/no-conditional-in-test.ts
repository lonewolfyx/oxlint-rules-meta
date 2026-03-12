export default {
    name: 'no-conditional-in-test',
    meta: {
        source: 'jest',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow conditional logic in tests',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-conditional-in-test.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    allowOptionalChaining: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
