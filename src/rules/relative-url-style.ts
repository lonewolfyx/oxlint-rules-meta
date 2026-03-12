export default {
    name: 'relative-url-style',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce consistent relative URL style.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/relative-url-style.html',
            category: 'style',
        },
        fixable: 'fixable_safe_fix_or_suggestion',
        defaultOptions: [
            'never',
        ],
        schema: [
            {
                enum: [
                    'never',
                    'always',
                ],
            },
        ],
    },
}
