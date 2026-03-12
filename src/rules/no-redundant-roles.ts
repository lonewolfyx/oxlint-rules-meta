export default {
    name: 'no-redundant-roles',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce explicit role property is not the same as implicit/default role property on element.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-redundant-roles.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: {
                    type: 'array',
                    items: {
                        type: 'string',
                    },
                    uniqueItems: true,
                },
            },
        ],
    },
}
