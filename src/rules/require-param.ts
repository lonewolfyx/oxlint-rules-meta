export default {
    name: 'require-param',
    meta: {
        source: 'jsdoc',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Requires that all function parameters are documented with a `@param` tag.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-param.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [
            {
                additionalProperties: false,
                properties: {
                    autoIncrementBase: {
                        default: 0,
                        description: 'Numeric to indicate the number at which to begin auto-incrementing roots.\nDefaults to `0`.',
                        type: 'integer',
                    },
                    checkConstructors: {
                        default: true,
                        description: 'A value indicating whether `constructor`s should be checked. Defaults to\n`true`.',
                        type: 'boolean',
                    },
                    checkDestructured: {
                        default: true,
                        description: 'Whether to require destructured properties. Defaults to `true`.',
                        type: 'boolean',
                    },
                    checkDestructuredRoots: {
                        default: true,
                        description: 'Whether to check the existence of a corresponding `@param` for root objects\nof destructured properties (e.g., that for `function ({a, b}) {}`, that there\nis something like `@param myRootObj` defined that can correspond to\nthe `{a, b}` object parameter).\n\nIf `checkDestructuredRoots` is `false`, `checkDestructured` will also be\nimplied to be `false` (i.e., the inside of the roots will not be checked\neither, e.g., it will also not complain if `a` or `b` do not have their own\ndocumentation). Defaults to `true`.',
                        type: 'boolean',
                    },
                    checkGetters: {
                        default: false,
                        description: 'A value indicating whether getters should be checked. Defaults to `false`.',
                        type: 'boolean',
                    },
                    checkRestProperty: {
                        default: false,
                        description: 'If set to `true`, will report (and add fixer insertions) for missing rest\nproperties. Defaults to `false`.\n\nIf set to `true`, note that you can still document the subproperties of the\nrest property using other jsdoc features, e.g., `@typedef`:\n\n```js\n/**\n * @typedef ExtraOptions\n * @property innerProp1\n * @property innerProp2\n */\n\n/**\n * @param cfg\n * @param cfg.num\n * @param {ExtraOptions} extra\n */\nfunction quux ({num, ...extra}) {\n}\n```\n\nSetting this option to `false` (the default) may be useful in cases where\nyou already have separate `@param` definitions for each of the properties\nwithin the rest property.\n\nFor example, with the option disabled, this will not give an error despite\n`extra` not having any definition:\n\n```js\n/**\n * @param cfg\n * @param cfg.num\n */\nfunction quux ({num, ...extra}) {\n}\n```\n\nNor will this:\n\n```js\n/**\n * @param cfg\n * @param cfg.num\n * @param cfg.innerProp1\n * @param cfg.innerProp2\n */\nfunction quux ({num, ...extra}) {\n}\n```',
                        type: 'boolean',
                    },
                    checkSetters: {
                        default: false,
                        description: 'A value indicating whether setters should be checked. Defaults to `false`.',
                        type: 'boolean',
                    },
                    checkTypesPattern: {
                        description: 'When one specifies a type, unless it is of a generic type, like `object`\nor `array`, it may be considered unnecessary to have that object\'s\ndestructured components required, especially where generated docs will\nlink back to the specified type. For example:\n\n```js\n/**\n * @param {SVGRect} bbox - a SVGRect\n */\nexport const bboxToObj = function ({x, y, width, height}) {\n  return {x, y, width, height};\n};\n```\n\nBy default `checkTypesPattern` is set to\n`/^(?:[oO]bject|[aA]rray|PlainObject|Generic(?:Object|Array))$/v`,\nmeaning that destructuring will be required only if the type of the `@param`\n(the text between curly brackets) is a match for "Object" or "Array" (with or\nwithout initial caps), "PlainObject", or "GenericObject", "GenericArray" (or\nif no type is present). So in the above example, the lack of a match will\nmean that no complaint will be given about the undocumented destructured\nparameters.\n\nNote that the `/` delimiters are optional, but necessary to add flags.\n\nDefaults to using (only) the `v` flag, so to add your own flags, encapsulate\nyour expression as a string, but like a literal, e.g., `/^object$/vi`.\n\nYou could set this regular expression to a more expansive list, or you\ncould restrict it such that even types matching those strings would not\nneed destructuring.',
                        type: 'string',
                    },
                    contexts: {
                        description: 'Set this to an array of strings representing the AST context (or an object with\noptional `context` and `comment` properties) where you wish the rule to be applied.\n\n`context` defaults to `any` and `comment` defaults to no specific comment context.\n\nOverrides the default contexts (`ArrowFunctionExpression`, `FunctionDeclaration`,\n`FunctionExpression`). May be useful for adding such as\n`TSMethodSignature` in TypeScript or restricting the contexts\nwhich are checked.\n\nSee the ["AST and Selectors"](../#advanced-ast-and-selectors)\nsection of our Advanced docs for more on the expected format.',
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
                    enableFixer: {
                        description: 'Whether to enable the fixer. Defaults to `true`.',
                        type: 'boolean',
                    },
                    enableRestElementFixer: {
                        description: 'Whether to enable the rest element fixer.\n\nThe fixer will automatically report/insert\n[JSDoc repeatable parameters](https://jsdoc.app/tags-param.html#multiple-types-and-repeatable-parameters)\nif missing.\n\n```js\n/**\n  * @param {GenericArray} cfg\n  * @param {number} cfg."0"\n */\nfunction baar ([a, ...extra]) {\n  //\n}\n```\n\n...becomes:\n\n```js\n/**\n  * @param {GenericArray} cfg\n  * @param {number} cfg."0"\n  * @param {...any} cfg."1"\n */\nfunction baar ([a, ...extra]) {\n  //\n}\n```\n\nNote that the type `any` is included since we don\'t know of any specific\ntype to use.\n\nDefaults to `true`.',
                        type: 'boolean',
                    },
                    enableRootFixer: {
                        description: 'Whether to enable the auto-adding of incrementing roots.\n\nThe default behavior of `true` is for "root" to be auto-inserted for missing\nroots, followed by a 0-based auto-incrementing number.\n\nSo for:\n\n```js\nfunction quux ({foo}, {bar}, {baz}) {\n}\n```\n\n...the default JSDoc that would be added if the fixer is enabled would be:\n\n```js\n/**\n* @param root0\n* @param root0.foo\n* @param root1\n* @param root1.bar\n* @param root2\n* @param root2.baz\n*/\n```\n\nHas no effect if `enableFixer` is set to `false`.',
                        type: 'boolean',
                    },
                    exemptedBy: {
                        description: 'Array of tags (e.g., `[\'type\']`) whose presence on the document block\navoids the need for a `@param`. Defaults to an array with\n`inheritdoc`. If you set this array, it will overwrite the default,\nso be sure to add back `inheritdoc` if you wish its presence to cause\nexemption of the rule.',
                        items: {
                            type: 'string',
                        },
                        type: 'array',
                    },
                    ignoreWhenAllParamsMissing: {
                        description: 'Set to `true` to ignore reporting when all params are missing. Defaults to\n`false`.',
                        type: 'boolean',
                    },
                    interfaceExemptsParamsCheck: {
                        description: 'Set if you wish TypeScript interfaces to exempt checks for the existence of\n`@param`\'s.\n\nWill check for a type defining the function itself (on a variable\ndeclaration) or if there is a single destructured object with a type.\nDefaults to `false`.',
                        type: 'boolean',
                    },
                    unnamedRootBase: {
                        description: 'An array of root names to use in the fixer when roots are missing. Defaults\nto `[\'root\']`. Note that only when all items in the array besides the last\nare exhausted will auto-incrementing occur. So, with\n`unnamedRootBase: [\'arg\', \'config\']`, the following:\n\n```js\nfunction quux ({foo}, [bar], {baz}) {\n}\n```\n\n...will get the following JSDoc block added:\n\n```js\n/**\n* @param arg\n* @param arg.foo\n* @param config0\n* @param config0."0" (`bar`)\n* @param config1\n* @param config1.baz\n*/\n```',
                        items: {
                            type: 'string',
                        },
                        type: 'array',
                    },
                    useDefaultObjectProperties: {
                        description: 'Set to `true` if you wish to expect documentation of properties on objects\nsupplied as default values. Defaults to `false`.',
                        type: 'boolean',
                    },
                },
                type: 'object',
            },
        ],
    },
}
