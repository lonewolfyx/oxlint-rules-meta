export default {
    name: 'extensions',
    meta: {
        source: 'import',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Ensure consistent use of file extension within the import path.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/extensions.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: {
            anyOf: [
                {
                    type: 'array',
                    items: [
                        {
                            enum: [
                                'always',
                                'ignorePackages',
                                'never',
                            ],
                        },
                    ],
                    additionalItems: false,
                },
                {
                    type: 'array',
                    items: [
                        {
                            enum: [
                                'always',
                                'ignorePackages',
                                'never',
                            ],
                        },
                        {
                            type: 'object',
                            properties: {
                                pattern: {
                                    type: 'object',
                                    patternProperties: {
                                        '.*': {
                                            enum: [
                                                'always',
                                                'ignorePackages',
                                                'never',
                                            ],
                                        },
                                    },
                                },
                                checkTypeImports: {
                                    type: 'boolean',
                                },
                                ignorePackages: {
                                    type: 'boolean',
                                },
                                pathGroupOverrides: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            pattern: {
                                                type: 'string',
                                            },
                                            patternOptions: {
                                                type: 'object',
                                            },
                                            action: {
                                                type: 'string',
                                                enum: [
                                                    'enforce',
                                                    'ignore',
                                                ],
                                            },
                                        },
                                        additionalProperties: false,
                                        required: [
                                            'pattern',
                                            'action',
                                        ],
                                    },
                                },
                            },
                        },
                    ],
                    additionalItems: false,
                },
                {
                    type: 'array',
                    items: [
                        {
                            type: 'object',
                            properties: {
                                pattern: {
                                    type: 'object',
                                    patternProperties: {
                                        '.*': {
                                            enum: [
                                                'always',
                                                'ignorePackages',
                                                'never',
                                            ],
                                        },
                                    },
                                },
                                checkTypeImports: {
                                    type: 'boolean',
                                },
                                ignorePackages: {
                                    type: 'boolean',
                                },
                                pathGroupOverrides: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            pattern: {
                                                type: 'string',
                                            },
                                            patternOptions: {
                                                type: 'object',
                                            },
                                            action: {
                                                type: 'string',
                                                enum: [
                                                    'enforce',
                                                    'ignore',
                                                ],
                                            },
                                        },
                                        additionalProperties: false,
                                        required: [
                                            'pattern',
                                            'action',
                                        ],
                                    },
                                },
                            },
                        },
                    ],
                    additionalItems: false,
                },
                {
                    type: 'array',
                    items: [
                        {
                            type: 'object',
                            patternProperties: {
                                '.*': {
                                    enum: [
                                        'always',
                                        'ignorePackages',
                                        'never',
                                    ],
                                },
                            },
                        },
                    ],
                    additionalItems: false,
                },
                {
                    type: 'array',
                    items: [
                        {
                            enum: [
                                'always',
                                'ignorePackages',
                                'never',
                            ],
                        },
                        {
                            type: 'object',
                            patternProperties: {
                                '.*': {
                                    enum: [
                                        'always',
                                        'ignorePackages',
                                        'never',
                                    ],
                                },
                            },
                        },
                    ],
                    additionalItems: false,
                },
            ],
        },
    },
}
