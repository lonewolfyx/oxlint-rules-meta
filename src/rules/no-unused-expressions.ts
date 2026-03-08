export default {
    name: 'no-unused-expressions',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow unused expressions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-expressions.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    allowShortCircuit: {
                        type: 'boolean',
                    },
                    allowTernary: {
                        type: 'boolean',
                    },
                    allowTaggedTemplates: {
                        type: 'boolean',
                    },
                    enforceForJSX: {
                        type: 'boolean',
                    },
                    ignoreDirectives: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
