export default {
    name: 'explicit-module-boundary-types',
    meta: {
        source: 'typescript',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Require explicit return and argument types on exported functions\' and classes\' public class methods',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/explicit-module-boundary-types.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowArgumentsExplicitlyTypedAsAny: {
                        type: 'boolean',
                        description: 'Whether to ignore arguments that are explicitly typed as `any`.',
                    },
                    allowDirectConstAssertionInArrowFunctions: {
                        type: 'boolean',
                        description: 'Whether to ignore return type annotations on body-less arrow functions that return an `as const` type assertion.\nYou must still type the parameters of the function.',
                    },
                    allowedNames: {
                        type: 'array',
                        description: 'An array of function/method names that will not have their arguments or return values checked.',
                        items: {
                            type: 'string',
                        },
                    },
                    allowHigherOrderFunctions: {
                        type: 'boolean',
                        description: 'Whether to ignore return type annotations on functions immediately returning another function expression.\nYou must still type the parameters of the function.',
                    },
                    allowOverloadFunctions: {
                        type: 'boolean',
                        description: 'Whether to ignore return type annotations on functions with overload signatures.',
                    },
                    allowTypedFunctionExpressions: {
                        type: 'boolean',
                        description: 'Whether to ignore type annotations on the variable of a function expression.',
                    },
                },
            },
        ],
    },
}
