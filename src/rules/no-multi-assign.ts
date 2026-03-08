export default {
    name: 'no-multi-assign',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow use of chained assignment expressions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-multi-assign.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreNonDeclaration: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
