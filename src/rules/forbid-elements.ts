export default {
    name: 'forbid-elements',
    meta: {
        source: 'react',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow certain elements',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/forbid-elements.html',
            category: 'restriction',
        },
        fixable: 'none',
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
                                        element: {
                                            type: 'string',
                                        },
                                        message: {
                                            type: 'string',
                                        },
                                    },
                                    required: [
                                        'element',
                                    ],
                                    additionalProperties: false,
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
