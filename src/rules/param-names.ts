export default {
    name: 'param-names',
    meta: {
        source: 'promise',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce consistent param names and ordering when creating new promises.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/param-names.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    resolvePattern: {
                        type: 'string',
                    },
                    rejectPattern: {
                        type: 'string',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
