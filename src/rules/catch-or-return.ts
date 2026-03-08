export default {
    name: 'catch-or-return',
    meta: {
        source: 'promise',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Enforce the use of `catch()` on un-returned promises.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/catch-or-return.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    allowFinally: {
                        type: 'boolean',
                    },
                    allowThen: {
                        type: 'boolean',
                    },
                    allowThenStrict: {
                        type: 'boolean',
                    },
                    terminationMethod: {
                        oneOf: [
                            {
                                type: 'string',
                            },
                            {
                                type: 'array',
                                items: {
                                    type: 'string',
                                },
                            },
                        ],
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
