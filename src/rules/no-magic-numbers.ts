export default {
    name: 'no-magic-numbers',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow magic numbers',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-magic-numbers.html',
            category: 'style',
        },
        fixable: 'pending',
        schema: [
            {
                type: 'object',
                properties: {
                    detectObjects: {
                        type: 'boolean',
                        default: false,
                    },
                    enforceConst: {
                        type: 'boolean',
                        default: false,
                    },
                    ignore: {
                        type: 'array',
                        items: {
                            anyOf: [
                                {
                                    type: 'number',
                                },
                                {
                                    type: 'string',
                                    pattern: '^[+-]?(?:0|[1-9][0-9]*)n$',
                                },
                            ],
                        },
                        uniqueItems: true,
                    },
                    ignoreArrayIndexes: {
                        type: 'boolean',
                        default: false,
                    },
                    ignoreDefaultValues: {
                        type: 'boolean',
                        default: false,
                    },
                    ignoreClassFieldInitialValues: {
                        type: 'boolean',
                        default: false,
                    },
                    ignoreEnums: {
                        type: 'boolean',
                        default: false,
                    },
                    ignoreNumericLiteralTypes: {
                        type: 'boolean',
                        default: false,
                    },
                    ignoreReadonlyClassProperties: {
                        type: 'boolean',
                        default: false,
                    },
                    ignoreTypeIndexes: {
                        type: 'boolean',
                        default: false,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
