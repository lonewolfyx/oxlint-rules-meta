export default {
    name: 'no-unsafe',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow usage of unsafe lifecycle methods',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-unsafe.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    checkAliases: {
                        default: false,
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
