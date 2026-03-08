export default {
    name: 'consistent-test-filename',
    meta: {
        source: 'vitest',
        category: 'style',
        default: false,
        docs: {
            description: 'require .spec test file pattern',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vitest/consistent-test-filename.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    pattern: {
                        format: 'regex',
                        default: '.*\\.test\\.[tj]sx?$',
                    },
                    allTestPattern: {
                        format: 'regex',
                        default: '.*\\.(test|spec)\\.[tj]sx?$',
                    },
                },
            },
        ],
    },
}
