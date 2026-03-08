export default {
    name: 'no-null',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow the use of the `null` literal.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-null.html',
            category: 'style',
        },
        fixable: 'conditional_dangerous_fix',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    checkStrictEquality: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
}
