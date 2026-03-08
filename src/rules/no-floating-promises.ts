export default {
    name: 'no-floating-promises',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Require Promise-like statements to be handled appropriately',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-floating-promises.html',
            category: 'correctness',
        },
        fixable: 'fixable_suggestion',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowForKnownSafeCalls: {
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
                        description: 'Type specifiers of functions whose calls are safe to float.',
                    },
                    allowForKnownSafePromises: {
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
                        description: 'Type specifiers that are known to be safe to float.',
                    },
                    checkThenables: {
                        type: 'boolean',
                        description: 'Whether to check all "Thenable"s, not just the built-in Promise type.',
                    },
                    ignoreIIFE: {
                        type: 'boolean',
                        description: 'Whether to ignore async IIFEs (Immediately Invoked Function Expressions).',
                    },
                    ignoreVoid: {
                        type: 'boolean',
                        description: 'Whether to ignore `void` expressions.',
                    },
                },
            },
        ],
    },
}
