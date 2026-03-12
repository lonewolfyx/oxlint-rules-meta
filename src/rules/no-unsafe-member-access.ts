export default {
    name: 'no-unsafe-member-access',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow member access on a value with type `any`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-member-access.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowOptionalChaining: {
                        type: 'boolean',
                        description: 'Whether to allow `?.` optional chains on `any` values.',
                    },
                },
            },
        ],
    },
}
