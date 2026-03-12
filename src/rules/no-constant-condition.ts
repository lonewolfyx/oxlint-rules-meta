export default {
    name: 'no-constant-condition',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow constant expressions in conditions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constant-condition.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [
            {
                checkLoops: 'allExceptWhileTrue',
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    checkLoops: {
                        enum: [
                            'all',
                            'allExceptWhileTrue',
                            'none',
                            true,
                            false,
                        ],
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
