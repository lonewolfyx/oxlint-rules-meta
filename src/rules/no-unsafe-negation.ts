export default {
    name: 'no-unsafe-negation',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow negating the left operand of relational operators',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-negation.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        schema: [
            {
                type: 'object',
                properties: {
                    enforceForOrderingRelations: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
