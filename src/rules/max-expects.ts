export default {
    name: 'max-expects',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforces a maximum number assertion calls in a test body',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/max-expects.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    max: {
                        type: 'integer',
                        minimum: 1,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
