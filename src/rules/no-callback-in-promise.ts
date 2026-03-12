export default {
    name: 'no-callback-in-promise',
    meta: {
        source: 'promise',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow calling `cb()` inside of a `then()` (use [util.callbackify][] instead).',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/no-callback-in-promise.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    exceptions: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    timeoutsErr: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
