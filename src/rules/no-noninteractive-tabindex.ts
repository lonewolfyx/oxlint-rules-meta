export default {
    name: 'no-noninteractive-tabindex',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: '`tabIndex` should only be declared on interactive elements.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-noninteractive-tabindex.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    roles: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                        additionalItems: false,
                        description: 'An array of ARIA roles',
                    },
                    tags: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                        additionalItems: false,
                        description: 'An array of HTML tag names',
                    },
                },
            },
        ],
    },
}
