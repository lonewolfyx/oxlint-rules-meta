export default {
    name: 'require-yields',
    meta: {
        source: 'jsdoc',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Requires yields are documented with `@yields` tags.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-yields.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                additionalProperties: false,
                properties: {
                    contexts: {
                        description: 'Set this to an array of strings representing the AST context\n(or objects with optional `context` and `comment` properties) where you wish\nthe rule to be applied.\n\n`context` defaults to `any` and `comment` defaults to no specific comment context.\n\nOverrides the default contexts (`ArrowFunctionExpression`, `FunctionDeclaration`,\n`FunctionExpression`). Set to `"any"` if you want\nthe rule to apply to any JSDoc block throughout your files (as is necessary\nfor finding function blocks not attached to a function declaration or\nexpression, i.e., `@callback` or `@function` (or its aliases `@func` or\n`@method`) (including those associated with an `@interface`). This\nrule will only apply on non-default contexts when there is such a tag\npresent and the `forceRequireYields` option is set or if the\n`withGeneratorTag` option is set with a present `@generator` tag\n(since we are not checking against the actual `yield` values in these\ncases).',
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
                    exemptedBy: {
                        description: 'Array of tags (e.g., `[\'type\']`) whose presence on the\ndocument block avoids the need for a `@yields`. Defaults to an array\nwith `inheritdoc`. If you set this array, it will overwrite the default,\nso be sure to add back `inheritdoc` if you wish its presence to cause\nexemption of the rule.',
                        items: {
                            type: 'string',
                        },
                        type: 'array',
                    },
                    forceRequireNext: {
                        default: false,
                        description: 'Set to `true` to always insist on\n`@next` documentation even if there are no `yield` statements in the\nfunction or none return values. May be desired to flag that a project is\naware of the expected yield return being `undefined`. Defaults to `false`.',
                        type: 'boolean',
                    },
                    forceRequireYields: {
                        default: false,
                        description: 'Set to `true` to always insist on\n`@yields` documentation for generators even if there are only\nexpressionless `yield` statements in the function. May be desired to flag\nthat a project is aware of an `undefined`/`void` yield. Defaults to\n`false`.',
                        type: 'boolean',
                    },
                    next: {
                        default: false,
                        description: 'If `true`, this option will insist that any use of a `yield` return\nvalue (e.g., `const rv = yield;` or `const rv = yield value;`) has a\n(non-standard) `@next` tag (in addition to any `@yields` tag) so as to be\nable to document the type expected to be supplied into the iterator\n(the `Generator` iterator that is returned by the call to the generator\nfunction) to the iterator (e.g., `it.next(value)`). The tag will not be\nexpected if the generator function body merely has plain `yield;` or\n`yield value;` statements without returning the values. Defaults to\n`false`.',
                        type: 'boolean',
                    },
                    nextWithGeneratorTag: {
                        default: false,
                        description: 'If a `@generator` tag is present on a block, require\n(non-standard ) `@next` (see `next` option). This will require using `void`\nor `undefined` in cases where generators do not use the `next()`-supplied\nincoming `yield`-returned value. Defaults to `false`. See `contexts` to\n`any` if you want to catch `@generator` with `@callback` or such not\nattached to a function.',
                        type: 'boolean',
                    },
                    withGeneratorTag: {
                        default: true,
                        description: 'If a `@generator` tag is present on a block, require\n`@yields`/`@yield`. Defaults to `true`. See `contexts` to `any` if you want\nto catch `@generator` with `@callback` or such not attached to a function.',
                        type: 'boolean',
                    },
                },
                type: 'object',
            },
        ],
    },
}
