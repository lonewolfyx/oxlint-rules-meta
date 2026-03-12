export default {
    name: 'no-restricted-jest-methods',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow specific `jest.` methods',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-restricted-jest-methods.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: {
                    type: [
                        'string',
                        'null',
                    ],
                },
            },
        ],
    },
}
