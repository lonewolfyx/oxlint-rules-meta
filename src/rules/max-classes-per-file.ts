export default {
    name: 'max-classes-per-file',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce a maximum number of classes per file',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-classes-per-file.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                oneOf: [
                    {
                        type: 'integer',
                        minimum: 1,
                    },
                    {
                        type: 'object',
                        properties: {
                            ignoreExpressions: {
                                type: 'boolean',
                            },
                            max: {
                                type: 'integer',
                                minimum: 1,
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
        ],
    },
}
