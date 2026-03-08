export default {
    name: 'no-danger',
    meta: {
        source: 'react',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow usage of dangerous JSX properties',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-danger.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    customComponentNames: {
                        items: {
                            type: 'string',
                        },
                        minItems: 0,
                        type: 'array',
                        uniqueItems: true,
                    },
                },
            },
        ],
    },
}
