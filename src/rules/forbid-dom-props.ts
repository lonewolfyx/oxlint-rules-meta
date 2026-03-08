export default {
    name: 'forbid-dom-props',
    meta: {
        source: 'react',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow certain props on DOM Nodes',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/forbid-dom-props.html',
            category: 'restriction',
        },
        fixable: 'none',
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
                                        propName: {
                                            type: 'string',
                                        },
                                        disallowedFor: {
                                            type: 'array',
                                            uniqueItems: true,
                                            items: {
                                                type: 'string',
                                            },
                                        },
                                        message: {
                                            type: 'string',
                                        },
                                    },
                                },
                            ],
                            minLength: 1,
                        },
                        uniqueItems: true,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
