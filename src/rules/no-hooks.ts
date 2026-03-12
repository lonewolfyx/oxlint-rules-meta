export default {
    name: 'no-hooks',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow setup and teardown hooks',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-hooks.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    allow: {
                        type: 'array',
                        contains: [
                            'beforeAll',
                            'beforeEach',
                            'afterAll',
                            'afterEach',
                        ],
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
