export default {
    name: 'prefer-ternary',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer ternary expressions over simple `if-else` statements.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-ternary.html',
            category: 'style',
        },
        fixable: 'pending',
        schema: [
            {
                enum: [
                    'always',
                    'only-single-line',
                ],
            },
        ],
    },
}
