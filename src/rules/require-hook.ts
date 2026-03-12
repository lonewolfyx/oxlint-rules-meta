export default {
    name: 'require-hook',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Require setup and teardown code to be within a hook',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/require-hook.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    allowedFunctionCalls: {
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
