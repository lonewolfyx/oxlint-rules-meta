export default {
    name: 'sort-imports',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce sorted `import` declarations within modules',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-imports.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreCase: {
                        type: 'boolean',
                    },
                    memberSyntaxSortOrder: {
                        type: 'array',
                        items: {
                            enum: [
                                'none',
                                'all',
                                'multiple',
                                'single',
                            ],
                        },
                        uniqueItems: true,
                        minItems: 4,
                        maxItems: 4,
                    },
                    ignoreDeclarationSort: {
                        type: 'boolean',
                    },
                    ignoreMemberSort: {
                        type: 'boolean',
                    },
                    allowSeparatedGroups: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
