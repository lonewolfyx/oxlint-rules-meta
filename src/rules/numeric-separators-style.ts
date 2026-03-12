export default {
    name: 'numeric-separators-style',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce the style of numeric separators by correctly grouping digits.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/numeric-separators-style.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [
            {
                onlyIfContainsSeparator: false,
                binary: {
                    minimumDigits: 0,
                    groupLength: 4,
                },
                octal: {
                    minimumDigits: 0,
                    groupLength: 4,
                },
                hexadecimal: {
                    minimumDigits: 0,
                    groupLength: 2,
                },
                number: {
                    minimumDigits: 5,
                    groupLength: 3,
                },
            },
        ],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    binary: {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                            onlyIfContainsSeparator: {
                                type: 'boolean',
                            },
                            minimumDigits: {
                                type: 'integer',
                                minimum: 0,
                            },
                            groupLength: {
                                type: 'integer',
                                minimum: 1,
                            },
                        },
                    },
                    octal: {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                            onlyIfContainsSeparator: {
                                type: 'boolean',
                            },
                            minimumDigits: {
                                type: 'integer',
                                minimum: 0,
                            },
                            groupLength: {
                                type: 'integer',
                                minimum: 1,
                            },
                        },
                    },
                    hexadecimal: {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                            onlyIfContainsSeparator: {
                                type: 'boolean',
                            },
                            minimumDigits: {
                                type: 'integer',
                                minimum: 0,
                            },
                            groupLength: {
                                type: 'integer',
                                minimum: 1,
                            },
                        },
                    },
                    number: {
                        type: 'object',
                        additionalProperties: false,
                        properties: {
                            onlyIfContainsSeparator: {
                                type: 'boolean',
                            },
                            minimumDigits: {
                                type: 'integer',
                                minimum: 0,
                            },
                            groupLength: {
                                type: 'integer',
                                minimum: 1,
                            },
                        },
                    },
                    onlyIfContainsSeparator: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
}
