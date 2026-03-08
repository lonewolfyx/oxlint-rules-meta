export default {
    name: 'no-did-mount-set-state',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow usage of setState in componentDidMount',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-did-mount-set-state.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                enum: [
                    'disallow-in-func',
                ],
            },
        ],
    },
}
