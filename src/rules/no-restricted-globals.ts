export default {
    name: 'no-restricted-globals',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow specified global variables',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-globals.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: {
            anyOf: [
                {
                    type: 'array',
                    items: {
                        oneOf: [
                            {
                                type: 'string',
                            },
                            {
                                type: 'object',
                                properties: {
                                    name: {
                                        type: 'string',
                                    },
                                    message: {
                                        type: 'string',
                                    },
                                },
                                required: [
                                    'name',
                                ],
                                additionalProperties: false,
                            },
                        ],
                    },
                    uniqueItems: true,
                    minItems: 0,
                },
                {
                    type: 'array',
                    items: [
                        {
                            type: 'object',
                            properties: {
                                globals: {
                                    type: 'array',
                                    items: {
                                        oneOf: [
                                            {
                                                type: 'string',
                                            },
                                            {
                                                type: 'object',
                                                properties: {
                                                    name: {
                                                        type: 'string',
                                                    },
                                                    message: {
                                                        type: 'string',
                                                    },
                                                },
                                                required: [
                                                    'name',
                                                ],
                                                additionalProperties: false,
                                            },
                                        ],
                                    },
                                    uniqueItems: true,
                                    minItems: 0,
                                },
                                checkGlobalObject: {
                                    type: 'boolean',
                                },
                                globalObjects: {
                                    type: 'array',
                                    items: {
                                        type: 'string',
                                    },
                                    uniqueItems: true,
                                },
                            },
                            required: [
                                'globals',
                            ],
                            additionalProperties: false,
                        },
                    ],
                    additionalItems: false,
                },
            ],
        },
    },
}
