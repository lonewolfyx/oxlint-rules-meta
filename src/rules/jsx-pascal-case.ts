export default {
    name: 'jsx-pascal-case',
    meta: {
        source: 'react',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce PascalCase for user-defined JSX components',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-pascal-case.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    allowAllCaps: {
                        type: 'boolean',
                    },
                    allowLeadingUnderscore: {
                        type: 'boolean',
                    },
                    allowNamespace: {
                        type: 'boolean',
                    },
                    ignore: {
                        items: [
                            {
                                type: 'string',
                            },
                        ],
                        minItems: 0,
                        type: 'array',
                        uniqueItems: true,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
