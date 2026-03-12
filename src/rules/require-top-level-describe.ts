export default {
    name: 'require-top-level-describe',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Require test cases and hooks to be inside a `describe` block',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/require-top-level-describe.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    maxNumberOfTopLevelDescribes: {
                        type: 'number',
                        minimum: 1,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
