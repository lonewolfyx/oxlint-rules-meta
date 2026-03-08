export default {
    name: 'require-returns-type',
    meta: {
        source: 'jsdoc',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Requires that `@returns` tag has type value (in curly brackets).',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-returns-type.html',
            category: 'pedantic',
        },
        fixable: 'none',
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
                },
                type: 'object',
            },
        ],
    },
}
