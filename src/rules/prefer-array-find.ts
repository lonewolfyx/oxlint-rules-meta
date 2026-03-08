export default {
    name: 'prefer-array-find',
    meta: {
        source: 'unicorn',
        category: 'perf',
        default: false,
        docs: {
            description: 'Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-find.html',
            category: 'perf',
        },
        fixable: 'pending',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    checkFromLast: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
}
