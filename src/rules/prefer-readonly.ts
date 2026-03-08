export default {
    name: 'prefer-readonly',
    meta: {
        source: 'typescript',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Require private members to be marked as `readonly` if they\'re never modified outside of the constructor',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-readonly.html',
            category: 'nursery',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    onlyInlineLambdas: {
                        type: 'boolean',
                        description: 'Whether to restrict checking only to members immediately assigned a lambda value.',
                    },
                },
            },
        ],
    },
}
