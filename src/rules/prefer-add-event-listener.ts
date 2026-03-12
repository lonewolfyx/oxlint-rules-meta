export default {
    name: 'prefer-add-event-listener',
    meta: {
        source: 'unicorn',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-add-event-listener.html',
            category: 'suspicious',
        },
        fixable: 'pending',
        defaultOptions: [
            {
                excludedPackages: [
                    'koa',
                    'sax',
                ],
            },
        ],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    excludedPackages: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                    },
                },
            },
        ],
    },
}
