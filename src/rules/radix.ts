export default {
    name: 'radix',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce the consistent use of the radix argument when using `parseInt()`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/radix.html',
            category: 'pedantic',
        },
        fixable: 'conditional_dangerous_fix',
        defaultOptions: [
            'always',
        ],
        schema: [
            {
                enum: [
                    'always',
                    'as-needed',
                ],
            },
        ],
    },
}
