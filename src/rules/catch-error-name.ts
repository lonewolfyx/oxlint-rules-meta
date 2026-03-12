export default {
    name: 'catch-error-name',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce a specific parameter name in catch clauses.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/catch-error-name.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [
            {
                name: 'error',
                ignore: [],
            },
        ],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    name: {
                        type: 'string',
                    },
                    ignore: {
                        type: 'array',
                        uniqueItems: true,
                    },
                },
            },
        ],
    },
}
