export default {
    name: 'no-unsafe-optional-chaining',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow use of optional chaining in contexts where the `undefined` value is not allowed',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-optional-chaining.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [
            {
                disallowArithmeticOperators: false,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    disallowArithmeticOperators: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
