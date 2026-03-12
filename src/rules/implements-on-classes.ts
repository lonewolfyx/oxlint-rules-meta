export default {
    name: 'implements-on-classes',
    meta: {
        source: 'jsdoc',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Prohibits use of `@implements` on non-constructor functions (to enforce the tag only being used on classes/constructors).',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/implements-on-classes.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                additionalProperties: false,
                properties: {
                    contexts: {
                        description: 'Set this to an array of strings representing the AST context (or an object with\n`context` and `comment` properties) where you wish the rule to be applied.\n\n`context` defaults to `any` and `comment` defaults to no specific comment context.\n\nOverrides the default contexts (`ArrowFunctionExpression`, `FunctionDeclaration`,\n`FunctionExpression`). Set to `"any"` if you want\nthe rule to apply to any JSDoc block throughout your files (as is necessary\nfor finding function blocks not attached to a function declaration or\nexpression, i.e., `@callback` or `@function` (or its aliases `@func` or\n`@method`) (including those associated with an `@interface`).\n\nSee the ["AST and Selectors"](../#advanced-ast-and-selectors)\nsection of our Advanced docs for more on the expected format.',
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
