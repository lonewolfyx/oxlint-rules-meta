export default {
    name: 'no-restricted-matchers',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow specific matchers & modifiers',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-restricted-matchers.html',
            category: 'style',
        },
        fixable: 'none',
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
