export default {
    name: 'no-warning-comments',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow specified warning terms in comments',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-warning-comments.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [
            {
                location: 'start',
                terms: [
                    'todo',
                    'fixme',
                    'xxx',
                ],
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    terms: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    location: {
                        enum: [
                            'start',
                            'anywhere',
                        ],
                    },
                    decoration: {
                        type: 'array',
                        items: {
                            type: 'string',
                            pattern: '^\\S$',
                        },
                        minItems: 1,
                        uniqueItems: true,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
