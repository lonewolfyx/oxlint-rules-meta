export default {
    name: 'no-invalid-regexp',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow invalid regular expression strings in `RegExp` constructors',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-invalid-regexp.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [
            {},
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    allowConstructorFlags: {
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
