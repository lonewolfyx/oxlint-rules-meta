export default {
    name: 'no-return-assign',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow assignment operators in `return` statements',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-return-assign.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                enum: [
                    'except-parens',
                    'always',
                ],
            },
        ],
    },
}
