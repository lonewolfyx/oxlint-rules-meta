export default {
    name: 'valid-typeof',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Enforce comparing `typeof` expressions against valid strings',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/valid-typeof.html',
            category: 'correctness',
        },
        fixable: 'conditional_fix',
        schema: [
            {
                type: 'object',
                properties: {
                    requireStringLiterals: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
