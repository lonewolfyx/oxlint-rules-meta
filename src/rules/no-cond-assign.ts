export default {
    name: 'no-cond-assign',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow assignment operators in conditional expressions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-cond-assign.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [
            'except-parens',
        ],
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
