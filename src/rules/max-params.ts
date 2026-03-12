export default {
    name: 'max-params',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce a maximum number of parameters in function definitions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-params.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
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
                            countVoidThis: {
                                type: 'boolean',
                                description: 'Whether to count a `this` declaration when the type is `void`.',
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
        ],
    },
}
