export default {
    name: 'no-extra-boolean-cast',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow unnecessary boolean casts',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-boolean-cast.html',
            category: 'correctness',
        },
        fixable: 'conditional_safe_fix_or_suggestion',
        schema: [
            {
                anyOf: [
                    {
                        type: 'object',
                        properties: {
                            enforceForInnerExpressions: {
                                type: 'boolean',
                            },
                        },
                        additionalProperties: false,
                    },
                    {
                        type: 'object',
                        properties: {
                            enforceForLogicalOperands: {
                                type: 'boolean',
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
        ],
    },
}
