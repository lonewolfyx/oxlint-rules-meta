export default {
    name: 'prefer-structured-clone',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer using `structuredClone` to create a deep clone.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-structured-clone.html',
            category: 'style',
        },
        fixable: 'fixable_suggestion',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    functions: {
                        type: 'array',
                        uniqueItems: true,
                    },
                },
            },
        ],
    },
}
