export default {
    name: 'valid-params',
    meta: {
        source: 'promise',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforces the proper number of arguments are passed to Promise functions.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/valid-params.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    exclude: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
