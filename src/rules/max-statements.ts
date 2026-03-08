export default {
    name: 'max-statements',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce a maximum number of statements allowed in function blocks',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-statements.html',
            category: 'style',
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
            {
                type: 'object',
                properties: {
                    ignoreTopLevelFunctions: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
