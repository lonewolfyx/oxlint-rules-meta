export default {
    name: 'require-returns',
    meta: {
        source: 'jsdoc',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Requires that returns are documented with `@returns`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-returns.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        schema: [
            {
                additionalProperties: false,
                properties: {
                    checkConstructors: {
                        default: false,
                        description: 'A value indicating whether `constructor`s should\nbe checked for `@returns` tags. Defaults to `false`.',
                        type: 'boolean',
                    },
                    checkGetters: {
                        default: true,
                        description: 'Boolean to determine whether getter methods should\nbe checked for `@returns` tags. Defaults to `true`.',
                        type: 'boolean',
                    },
                    contexts: {
                        description: 'Set this to an array of strings representing the AST context\n(or objects with optional `context` and `comment` properties) where you wish\nthe rule to be applied.\n\n`context` defaults to `any` and `comment` defaults to no specific comment context.\n\nOverrides the default contexts (`ArrowFunctionExpression`, `FunctionDeclaration`,\n`FunctionExpression`). Set to `"any"` if you want\nthe rule to apply to any JSDoc block throughout your files (as is necessary\nfor finding function blocks not attached to a function declaration or\nexpression, i.e., `@callback` or `@function` (or its aliases `@func` or\n`@method`) (including those associated with an `@interface`). This\nrule will only apply on non-default contexts when there is such a tag\npresent and the `forceRequireReturn` option is set or if the\n`forceReturnsWithAsync` option is set with a present `@async` tag\n(since we are not checking against the actual `return` values in these\ncases).',
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
                                        forceRequireReturn: {
                                            type: 'boolean',
                                        },
                                    },
                                    type: 'object',
                                },
                            ],
                        },
                        type: 'array',
                    },
                    enableFixer: {
                        description: 'Whether to enable the fixer to add a blank `@returns`.\nDefaults to `false`.',
                        type: 'boolean',
                    },
                    exemptedBy: {
                        description: 'Array of tags (e.g., `[\'type\']`) whose presence on the\ndocument block avoids the need for a `@returns`. Defaults to an array\nwith `inheritdoc`. If you set this array, it will overwrite the default,\nso be sure to add back `inheritdoc` if you wish its presence to cause\nexemption of the rule.',
                        items: {
                            type: 'string',
                        },
                        type: 'array',
                    },
                    forceRequireReturn: {
                        default: false,
                        description: 'Set to `true` to always insist on\n`@returns` documentation regardless of implicit or explicit `return`\'s\nin the function. May be desired to flag that a project is aware of an\n`undefined`/`void` return. Defaults to `false`.',
                        type: 'boolean',
                    },
                    forceReturnsWithAsync: {
                        default: false,
                        description: 'By default `async` functions that do not explicitly\nreturn a value pass this rule as an `async` function will always return a\n`Promise`, even if the `Promise` resolves to void. You can force all\n`async` functions (including ones with an explicit `Promise` but no\ndetected non-`undefined` `resolve` value) to require `@return`\ndocumentation by setting `forceReturnsWithAsync` to `true` on the options\nobject. This may be useful for flagging that there has been consideration\nof return type. Defaults to `false`.',
                        type: 'boolean',
                    },
                    publicOnly: {
                        description: 'This option will insist that missing `@returns` are only reported for\nfunction bodies / class declarations that are exported from the module.\nMay be a boolean or object. If set to `true`, the defaults below will be\nused. If unset, `@returns` reporting will not be limited to exports.\n\nThis object supports the following optional boolean keys (`false` unless\notherwise noted):\n\n- `ancestorsOnly` - Optimization to only check node ancestors to check if node is exported\n- `esm` - ESM exports are checked for `@returns` JSDoc comments (Defaults to `true`)\n- `cjs` - CommonJS exports are checked for `@returns` JSDoc comments  (Defaults to `true`)\n- `window` - Window global exports are checked for `@returns` JSDoc comments',
                        oneOf: [
                            {
                                default: false,
                                type: 'boolean',
                            },
                            {
                                additionalProperties: false,
                                default: {},
                                properties: {
                                    ancestorsOnly: {
                                        type: 'boolean',
                                    },
                                    cjs: {
                                        type: 'boolean',
                                    },
                                    esm: {
                                        type: 'boolean',
                                    },
                                    window: {
                                        type: 'boolean',
                                    },
                                },
                                type: 'object',
                            },
                        ],
                    },
                },
                type: 'object',
            },
        ],
    },
}
