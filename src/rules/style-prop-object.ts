export default {
    name: 'style-prop-object',
    meta: {
        source: 'react',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Enforce style prop value is an object',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/style-prop-object.html',
            category: 'suspicious',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    allow: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        additionalItems: false,
                        uniqueItems: true,
                    },
                },
            },
        ],
    },
}
