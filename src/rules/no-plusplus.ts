export default {
    name: 'no-plusplus',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow the unary operators `++` and `--`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-plusplus.html',
            category: 'restriction',
        },
        fixable: 'conditional_suggestion',
        defaultOptions: [
            {
                allowForLoopAfterthoughts: false,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    allowForLoopAfterthoughts: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
