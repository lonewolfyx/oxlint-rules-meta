export default {
    name: 'no-eval',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow the use of `eval()`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-eval.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [
            {
                allowIndirect: false,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    allowIndirect: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
