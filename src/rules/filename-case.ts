export default {
    name: 'filename-case',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce a case style for filenames.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/filename-case.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                oneOf: [
                    {
                        properties: {
                            case: {
                                enum: [
                                    'camelCase',
                                    'snakeCase',
                                    'kebabCase',
                                    'pascalCase',
                                ],
                            },
                            ignore: {
                                type: 'array',
                                uniqueItems: true,
                            },
                            multipleFileExtensions: {
                                type: 'boolean',
                            },
                        },
                        additionalProperties: false,
                    },
                    {
                        properties: {
                            cases: {
                                properties: {
                                    camelCase: {
                                        type: 'boolean',
                                    },
                                    snakeCase: {
                                        type: 'boolean',
                                    },
                                    kebabCase: {
                                        type: 'boolean',
                                    },
                                    pascalCase: {
                                        type: 'boolean',
                                    },
                                },
                                additionalProperties: false,
                            },
                            ignore: {
                                type: 'array',
                                uniqueItems: true,
                            },
                            multipleFileExtensions: {
                                type: 'boolean',
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
        ],
    },
}
