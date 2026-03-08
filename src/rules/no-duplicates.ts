export default {
    name: 'no-duplicates',
    meta: {
        source: 'import',
        category: 'style',
        default: false,
        docs: {
            description: 'Forbid repeated import of the same module in multiple places.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-duplicates.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    'considerQueryString': {
                        type: 'boolean',
                    },
                    'prefer-inline': {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
