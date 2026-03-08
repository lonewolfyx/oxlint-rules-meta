export default {
    name: 'prefer-default-export',
    meta: {
        source: 'import',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer a default export if module exports a single name or multiple names.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/prefer-default-export.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    target: {
                        type: 'string',
                        enum: [
                            'single',
                            'any',
                        ],
                        default: 'single',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
