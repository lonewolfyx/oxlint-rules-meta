export default {
    name: 'anchor-ambiguous-text',
    meta: {
        source: 'jsx_a11y',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/anchor-ambiguous-text.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    words: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                        additionalItems: false,
                    },
                },
            },
        ],
    },
}
