export default {
    name: 'consistent-test-it',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce `test` and `it` usage conventions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/consistent-test-it.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    fn: {
                        type: 'string',
                        enum: [
                            'it',
                            'test',
                        ],
                    },
                    withinDescribe: {
                        type: 'string',
                        enum: [
                            'it',
                            'test',
                        ],
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
