export default {
    name: 'no-will-update-set-state',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow usage of setState in componentWillUpdate',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-will-update-set-state.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                enum: [
                    'disallow-in-func',
                ],
            },
        ],
    },
}
