export default {
    name: 'no-unknown-property',
    meta: {
        source: 'react',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow usage of unknown DOM property',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-unknown-property.html',
            category: 'restriction',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    ignore: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    requireDataLowercase: {
                        type: 'boolean',
                        default: false,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
