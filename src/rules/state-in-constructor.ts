export default {
    name: 'state-in-constructor',
    meta: {
        source: 'react',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce class component state initialization style',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/state-in-constructor.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                enum: [
                    'always',
                    'never',
                ],
            },
        ],
    },
}
