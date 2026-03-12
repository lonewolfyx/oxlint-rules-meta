export default {
    name: 'prefer-object-from-entries',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-object-from-entries.html',
            category: 'style',
        },
        fixable: 'pending',
        defaultOptions: [
            {
                functions: [],
            },
        ],
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
