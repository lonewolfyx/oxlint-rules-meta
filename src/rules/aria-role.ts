export default {
    name: 'aria-role',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/aria-role.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    allowedInvalidRoles: {
                        items: {
                            type: 'string',
                        },
                        type: 'array',
                        uniqueItems: true,
                    },
                    ignoreNonDOM: {
                        type: 'boolean',
                        default: false,
                    },
                },
            },
        ],
    },
}
