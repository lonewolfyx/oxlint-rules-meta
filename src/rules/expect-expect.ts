export default {
    name: 'expect-expect',
    meta: {
        source: 'jest',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce assertion to be made in a test body',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/expect-expect.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    assertFunctionNames: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
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
