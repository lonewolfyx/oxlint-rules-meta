export default {
    name: 'only-throw-error',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow throwing non-`Error` values as exceptions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/only-throw-error.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [],
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
                        description: 'Type specifiers that can be thrown.',
                    },
                    allowRethrowing: {
                        type: 'boolean',
                        description: 'Whether to allow rethrowing caught values that are not `Error` objects.',
                    },
                    allowThrowingAny: {
                        type: 'boolean',
                        description: 'Whether to always allow throwing values typed as `any`.',
                    },
                    allowThrowingUnknown: {
                        type: 'boolean',
                        description: 'Whether to always allow throwing values typed as `unknown`.',
                    },
                },
            },
        ],
    },
}
