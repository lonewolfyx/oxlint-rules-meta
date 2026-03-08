export default {
    name: 'prefer-literal-enum-member',
    meta: {
        source: 'typescript',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Require all enum members to be literal values',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-literal-enum-member.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowBitwiseExpressions: {
                        type: 'boolean',
                        description: 'Whether to allow using bitwise expressions in enum initializers.',
                    },
                },
            },
        ],
    },
}
