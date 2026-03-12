export default {
    name: 'max-lines-per-function',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce a maximum number of lines of code in a function',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/max-lines-per-function.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                oneOf: [
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
                            IIFEs: {
                                type: 'boolean',
                            },
                        },
                        additionalProperties: false,
                    },
                    {
                        type: 'integer',
                        minimum: 1,
                    },
                ],
            },
        ],
    },
}
