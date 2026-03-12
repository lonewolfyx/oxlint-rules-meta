export default {
    name: 'no-unescaped-entities',
    meta: {
        source: 'react',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow unescaped HTML entities from appearing in markup',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-unescaped-entities.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    forbid: {
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    type: 'string',
                                },
                                {
                                    type: 'object',
                                    properties: {
                                        char: {
                                            type: 'string',
                                        },
                                        alternatives: {
                                            type: 'array',
                                            uniqueItems: true,
                                            items: {
                                                type: 'string',
                                            },
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
