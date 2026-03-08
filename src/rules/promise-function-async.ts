export default {
    name: 'promise-function-async',
    meta: {
        source: 'typescript',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Require any function or method that returns a Promise to be marked async',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/promise-function-async.html',
            category: 'restriction',
        },
        fixable: 'conditional_fix',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowAny: {
                        type: 'boolean',
                        description: 'Whether to consider `any` and `unknown` to be Promises.',
                    },
                    allowedPromiseNames: {
                        type: 'array',
                        description: 'Any extra names of classes or interfaces to be considered Promises.',
                        items: {
                            type: 'string',
                        },
                    },
                    checkArrowFunctions: {
                        type: 'boolean',
                        description: 'Whether to check arrow functions.',
                    },
                    checkFunctionDeclarations: {
                        type: 'boolean',
                        description: 'Whether to check standalone function declarations.',
                    },
                    checkFunctionExpressions: {
                        type: 'boolean',
                        description: 'Whether to check inline function expressions',
                    },
                    checkMethodDeclarations: {
                        type: 'boolean',
                        description: 'Whether to check methods on classes and object literals.',
                    },
                },
            },
        ],
    },
}
