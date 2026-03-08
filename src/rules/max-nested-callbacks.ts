export default {
    name: 'max-nested-callbacks',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce a maximum depth that callbacks can be nested',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-nested-callbacks.html',
            category: 'pedantic',
        },
        fixable: 'none',
        schema: [
            {
                oneOf: [
                    {
                        type: 'integer',
                        minimum: 0,
                    },
                    {
                        type: 'object',
                        properties: {
                            maximum: {
                                type: 'integer',
                                minimum: 0,
                            },
                            max: {
                                type: 'integer',
                                minimum: 0,
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
        ],
    },
}
