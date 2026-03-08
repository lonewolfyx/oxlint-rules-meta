export default {
    name: 'default-case',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Require `default` cases in `switch` statements',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/default-case.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    commentPattern: {
                        type: 'string',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
