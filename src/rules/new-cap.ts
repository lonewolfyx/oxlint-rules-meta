export default {
    name: 'new-cap',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Require constructor names to begin with a capital letter',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/new-cap.html',
            category: 'style',
        },
        fixable: 'pending',
        defaultOptions: [
            {
                capIsNew: true,
                capIsNewExceptions: [
                    'Array',
                    'Boolean',
                    'Date',
                    'Error',
                    'Function',
                    'Number',
                    'Object',
                    'RegExp',
                    'String',
                    'Symbol',
                    'BigInt',
                ],
                newIsCap: true,
                newIsCapExceptions: [],
                properties: true,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    newIsCap: {
                        type: 'boolean',
                    },
                    capIsNew: {
                        type: 'boolean',
                    },
                    newIsCapExceptions: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    newIsCapExceptionPattern: {
                        type: 'string',
                    },
                    capIsNewExceptions: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    capIsNewExceptionPattern: {
                        type: 'string',
                    },
                    properties: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
