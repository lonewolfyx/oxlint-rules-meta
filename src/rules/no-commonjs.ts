export default {
    name: 'no-commonjs',
    meta: {
        source: 'import',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Forbid CommonJS `require` calls and `module.exports` or `exports.*`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-commonjs.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: {
            anyOf: [
                {
                    type: 'array',
                    items: [
                        {
                            enum: [
                                'allow-primitive-modules',
                            ],
                        },
                    ],
                    additionalItems: false,
                },
                {
                    type: 'array',
                    items: [
                        {
                            type: 'object',
                            properties: {
                                allowPrimitiveModules: {
                                    type: 'boolean',
                                },
                                allowRequire: {
                                    type: 'boolean',
                                },
                                allowConditionalRequire: {
                                    type: 'boolean',
                                },
                            },
                            additionalProperties: false,
                        },
                    ],
                    additionalItems: false,
                },
            ],
        },
    },
}
