export default {
    name: 'jsx-fragments',
    meta: {
        source: 'react',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce shorthand or standard form for React fragments',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-fragments.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [
            {
                enum: [
                    'syntax',
                    'element',
                ],
            },
        ],
    },
}
