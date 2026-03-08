export default {
    name: 'jsx-no-useless-fragment',
    meta: {
        source: 'react',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow unnecessary fragments',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-useless-fragment.html',
            category: 'pedantic',
        },
        fixable: 'fixable_suggestion',
        schema: [
            {
                type: 'object',
                properties: {
                    allowExpressions: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
}
