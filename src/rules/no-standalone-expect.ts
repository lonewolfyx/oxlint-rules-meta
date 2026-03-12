export default {
    name: 'no-standalone-expect',
    meta: {
        source: 'jest',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow using `expect` outside of `it` or `test` blocks',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-standalone-expect.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    additionalTestBlockFunctions: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
