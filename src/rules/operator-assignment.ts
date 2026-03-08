export default {
    name: 'operator-assignment',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Require or disallow assignment operator shorthand where possible',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/operator-assignment.html',
            category: 'style',
        },
        fixable: 'fixable_dangerous_fix',
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
