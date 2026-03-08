export default {
    name: 'require-param-type',
    meta: {
        source: 'jsdoc',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Requires that each `@param` tag has a type value (in curly brackets).',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-param-type.html',
            category: 'pedantic',
        },
        fixable: 'pending',
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
                    defaultDestructuredRootType: {
                        description: 'The type string to set by default for destructured roots. Defaults to "object".',
                        type: 'string',
                    },
                    setDefaultDestructuredRootType: {
                        description: 'Whether to set a default destructured root type. For example, you may wish\nto avoid manually having to set the type for a `@param`\ncorresponding to a destructured root object as it is always going to be an\nobject. Uses `defaultDestructuredRootType` for the type string. Defaults to\n`false`.',
                        type: 'boolean',
                    },
                },
                type: 'object',
            },
        ],
    },
}
