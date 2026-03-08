export default {
    name: 'prefer-const',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Require `const` declarations for variables that are never reassigned after declared',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-const.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        schema: [
            {
                type: 'object',
                properties: {
                    destructuring: {
                        enum: [
                            'any',
                            'all',
                        ],
                    },
                    ignoreReadBeforeAssign: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
