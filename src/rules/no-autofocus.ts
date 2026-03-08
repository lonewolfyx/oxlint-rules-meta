export default {
    name: 'no-autofocus',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce autoFocus prop is not used.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-autofocus.html',
            category: 'correctness',
        },
        fixable: 'fixable_suggestion',
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreNonDOM: {
                        type: 'boolean',
                        default: false,
                    },
                },
            },
        ],
    },
}
