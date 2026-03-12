export default {
    name: 'max-lines',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce a maximum number of lines per file',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines.html',
            category: 'pedantic',
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
                            max: {
                                type: 'integer',
                                minimum: 0,
                            },
                            skipComments: {
                                type: 'boolean',
                            },
                            skipBlankLines: {
                                type: 'boolean',
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
        ],
    },
}
