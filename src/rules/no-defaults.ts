export default {
    name: 'no-defaults',
    meta: {
        source: 'jsdoc',
        category: 'correctness',
        default: false,
        docs: {
            description: 'This rule reports defaults being used on the relevant portion of `@param` or `@default`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/no-defaults.html',
            category: 'correctness',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [
            {
                additionalProperties: false,
                properties: {
                    contexts: {
                        description: 'Set this to an array of strings representing the AST context (or an object with\noptional `context` and `comment` properties) where you wish the rule to be applied.\n\n`context` defaults to `any` and `comment` defaults to no specific comment context.\n\nOverrides the default contexts (`ArrowFunctionExpression`, `FunctionDeclaration`,\n`FunctionExpression`). Set to `"any"` if you want\nthe rule to apply to any JSDoc block throughout your files (as is necessary\nfor finding function blocks not attached to a function declaration or\nexpression, i.e., `@callback` or `@function` (or its aliases `@func` or\n`@method`) (including those associated with an `@interface`).\n\nSee the ["AST and Selectors"](../#advanced-ast-and-selectors)\nsection of our Advanced docs for more on the expected format.',
                        items: {
                            anyOf: [
                                {
                                    type: 'string',
                                },
                                {
                                    additionalProperties: false,
                                    properties: {
                                        comment: {
                                            type: 'string',
                                        },
                                        context: {
                                            type: 'string',
                                        },
                                    },
                                    type: 'object',
                                },
                            ],
                        },
                        type: 'array',
                    },
                    noOptionalParamNames: {
                        description: 'Set this to `true` to report the presence of optional parameters. May be\nused if the project is insisting on optionality being indicated by\nthe presence of ES6 default parameters (bearing in mind that such\n"defaults" are only applied when the supplied value is missing or\n`undefined` but not for `null` or other "falsey" values).',
                        type: 'boolean',
                    },
                },
                type: 'object',
            },
        ],
    },
}
