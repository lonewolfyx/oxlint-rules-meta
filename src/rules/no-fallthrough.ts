export default {
    name: 'no-fallthrough',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow fallthrough of `case` statements',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-fallthrough.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        defaultOptions: [
            {
                allowEmptyCase: false,
                reportUnusedFallthroughComment: false,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    commentPattern: {
                        type: 'string',
                    },
                    allowEmptyCase: {
                        type: 'boolean',
                    },
                    reportUnusedFallthroughComment: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
