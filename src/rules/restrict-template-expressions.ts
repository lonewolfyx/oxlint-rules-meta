export default {
    name: 'restrict-template-expressions',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Enforce template literal expressions to be of `string` type',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/restrict-template-expressions.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowAny: {
                        type: 'boolean',
                        description: 'Whether to allow `any` typed values in template expressions.',
                    },
                    allowArray: {
                        type: 'boolean',
                        description: 'Whether to allow `array` typed values in template expressions.',
                    },
                    allowBoolean: {
                        type: 'boolean',
                        description: 'Whether to allow `boolean` typed values in template expressions.',
                    },
                    allowNullish: {
                        type: 'boolean',
                        description: 'Whether to allow `nullish` typed values in template expressions.',
                    },
                    allowNumber: {
                        type: 'boolean',
                        description: 'Whether to allow `number` typed values in template expressions.',
                    },
                    allowRegExp: {
                        type: 'boolean',
                        description: 'Whether to allow `regexp` typed values in template expressions.',
                    },
                    allowNever: {
                        type: 'boolean',
                        description: 'Whether to allow `never` typed values in template expressions.',
                    },
                    allow: {
                        description: 'Types to allow in template expressions.',
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
                    },
                },
            },
        ],
    },
}
