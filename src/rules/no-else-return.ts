export default {
    name: 'no-else-return',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow `else` blocks after `return` statements in `if` statements',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-else-return.html',
            category: 'pedantic',
        },
        fixable: 'conditional_fix',
        defaultOptions: [
            {
                allowElseIf: true,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    allowElseIf: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
