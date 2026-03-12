export default {
    name: 'autocomplete-valid',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce that autocomplete attributes are used correctly.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/autocomplete-valid.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    inputComponents: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                        additionalItems: false,
                    },
                },
            },
        ],
    },
}
