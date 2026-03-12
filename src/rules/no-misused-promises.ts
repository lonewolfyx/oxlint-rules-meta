export default {
    name: 'no-misused-promises',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow Promises in places not designed to handle them',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-misused-promises.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    checksConditionals: {
                        type: 'boolean',
                        description: 'Whether to warn when a Promise is provided to conditional statements.',
                    },
                    checksSpreads: {
                        type: 'boolean',
                        description: 'Whether to warn when `...` spreading a `Promise`.',
                    },
                    checksVoidReturn: {
                        description: 'Whether to warn when a Promise is returned from a function typed as returning `void`.',
                        oneOf: [
                            {
                                type: 'boolean',
                                description: 'Whether to disable checking all asynchronous functions.',
                            },
                            {
                                type: 'object',
                                additionalProperties: false,
                                description: 'Which forms of functions may have checking disabled.',
                                properties: {
                                    arguments: {
                                        type: 'boolean',
                                        description: 'Disables checking an asynchronous function passed as argument where the parameter type expects a function that returns `void`.',
                                    },
                                    attributes: {
                                        type: 'boolean',
                                        description: 'Disables checking an asynchronous function passed as a JSX attribute expected to be a function that returns `void`.',
                                    },
                                    inheritedMethods: {
                                        type: 'boolean',
                                        description: 'Disables checking an asynchronous method in a type that extends or implements another type expecting that method to return `void`.',
                                    },
                                    properties: {
                                        type: 'boolean',
                                        description: 'Disables checking an asynchronous function passed as an object property expected to be a function that returns `void`.',
                                    },
                                    returns: {
                                        type: 'boolean',
                                        description: 'Disables checking an asynchronous function returned in a function whose return type is a function that returns `void`.',
                                    },
                                    variables: {
                                        type: 'boolean',
                                        description: 'Disables checking an asynchronous function used as a variable whose return type is a function that returns `void`.',
                                    },
                                },
                            },
                        ],
                    },
                },
            },
        ],
    },
}
