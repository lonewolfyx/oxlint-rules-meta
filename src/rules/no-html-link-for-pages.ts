export default {
    name: 'no-html-link-for-pages',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Prevent usage of `<a>` elements to navigate to internal Next.js pages.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-html-link-for-pages.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                oneOf: [
                    {
                        type: 'string',
                    },
                    {
                        type: 'array',
                        uniqueItems: true,
                        items: {
                            type: 'string',
                        },
                    },
                ],
            },
        ],
    },
}
