export default {
    name: 'no-irregular-whitespace',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow irregular whitespace',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-irregular-whitespace.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    skipComments: {
                        type: 'boolean',
                    },
                    skipStrings: {
                        type: 'boolean',
                    },
                    skipTemplates: {
                        type: 'boolean',
                    },
                    skipRegExps: {
                        type: 'boolean',
                    },
                    skipJSXText: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
