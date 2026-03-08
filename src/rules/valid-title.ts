export default {
    name: 'valid-title',
    meta: {
        source: 'jest',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce valid titles',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/valid-title.html',
            category: 'correctness',
        },
        fixable: 'conditional_fix',
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreSpaces: {
                        type: 'boolean',
                        default: false,
                    },
                    ignoreTypeOfDescribeName: {
                        type: 'boolean',
                        default: false,
                    },
                    ignoreTypeOfTestName: {
                        type: 'boolean',
                        default: false,
                    },
                    disallowedWords: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                },
                patternProperties: {
                    '^must(?:Not)?Match$': {
                        oneOf: [
                            {
                                type: 'string',
                            },
                            {
                                type: 'array',
                                items: {
                                    type: 'string',
                                },
                                minItems: 1,
                                maxItems: 2,
                                additionalItems: false,
                            },
                            {
                                type: 'object',
                                propertyNames: {
                                    enum: [
                                        'describe',
                                        'test',
                                        'it',
                                    ],
                                },
                                additionalProperties: {
                                    oneOf: [
                                        {
                                            type: 'string',
                                        },
                                        {
                                            type: 'array',
                                            items: {
                                                type: 'string',
                                            },
                                            minItems: 1,
                                            maxItems: 2,
                                            additionalItems: false,
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
