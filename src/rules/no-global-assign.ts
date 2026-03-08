export default {
    name: 'no-global-assign',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow assignments to native objects or read-only global variables',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-global-assign.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    exceptions: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
