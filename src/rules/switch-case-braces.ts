export default {
    name: 'switch-case-braces',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce consistent brace style for `case` clauses.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/switch-case-braces.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [
            'always',
        ],
        schema: [
            {
                enum: [
                    'always',
                    'avoid',
                ],
            },
        ],
    },
}
