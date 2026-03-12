export default {
    name: 'text-encoding-identifier-case',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce consistent case for text encoding identifiers.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/text-encoding-identifier-case.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [
            {
                withDash: false,
            },
        ],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    withDash: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
}
