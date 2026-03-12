export default {
    name: 'consistent-type-specifier-style',
    meta: {
        source: 'import',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce or ban the use of inline type-only markers for named imports.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/consistent-type-specifier-style.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        defaultOptions: [],
        schema: [
            {
                type: 'string',
                enum: [
                    'prefer-inline',
                    'prefer-top-level',
                ],
                default: 'prefer-inline',
            },
        ],
    },
}
