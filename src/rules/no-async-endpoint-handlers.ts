export default {
    name: 'no-async-endpoint-handlers',
    meta: {
        source: 'oxc',
        category: 'suspicious',
        default: false,
        description: 'Disallows the use of async functions as Express endpoint handlers.',
        docs: {
            description: 'Disallows the use of async functions as Express endpoint handlers.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-async-endpoint-handlers.html',
            category: 'suspicious',
        },
        fixable: 'none',
        schema: {
            type: 'object',
            properties: {
                allowedNames: {
                    type: 'array',
                },
            },
            required: [
                'allowedNames',
            ],
        },
    },
}
