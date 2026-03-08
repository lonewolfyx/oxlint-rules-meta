export default {
    name: 'max-nested-describe',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforces a maximum depth to nested describe calls',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/max-nested-describe.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    max: {
                        type: 'integer',
                        minimum: 0,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
