export default {
    name: 'no-deprecated',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow using code marked as `@deprecated`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-deprecated.html',
            category: 'pedantic',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allow: {
                        items: {
                            oneOf: [
                                {
                                    type: 'string',
                                },
                                {
                                    additionalProperties: false,
                                    properties: {
                                        from: {
                                            enum: [
                                                'file',
                                            ],
                                            type: 'string',
                                        },
                                        name: {
                                            oneOf: [
                                                {
                                                    type: 'string',
                                                },
                                                {
                                                    items: {
                                                        type: 'string',
                                                    },
                                                    minItems: 1,
                                                    type: 'array',
                                                    uniqueItems: true,
                                                },
                                            ],
                                        },
                                        path: {
                                            type: 'string',
                                        },
                                    },
                                    required: [
                                        'from',
                                        'name',
                                    ],
                                    type: 'object',
                                },
                                {
                                    additionalProperties: false,
                                    properties: {
                                        from: {
                                            enum: [
                                                'lib',
                                            ],
                                            type: 'string',
                                        },
                                        name: {
                                            oneOf: [
                                                {
                                                    type: 'string',
                                                },
                                                {
                                                    items: {
                                                        type: 'string',
                                                    },
                                                    minItems: 1,
                                                    type: 'array',
                                                    uniqueItems: true,
                                                },
                                            ],
                                        },
                                    },
                                    required: [
                                        'from',
                                        'name',
                                    ],
                                    type: 'object',
                                },
                                {
                                    additionalProperties: false,
                                    properties: {
                                        from: {
                                            enum: [
                                                'package',
                                            ],
                                            type: 'string',
                                        },
                                        name: {
                                            oneOf: [
                                                {
                                                    type: 'string',
                                                },
                                                {
                                                    items: {
                                                        type: 'string',
                                                    },
                                                    minItems: 1,
                                                    type: 'array',
                                                    uniqueItems: true,
                                                },
                                            ],
                                        },
                                        package: {
                                            type: 'string',
                                        },
                                    },
                                    required: [
                                        'from',
                                        'name',
                                        'package',
                                    ],
                                    type: 'object',
                                },
                            ],
                        },
                        type: 'array',
                        description: 'Type specifiers that can be allowed.',
                    },
                },
            },
        ],
    },
}
