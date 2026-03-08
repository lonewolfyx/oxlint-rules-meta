export default {
    name: 'no-inner-declarations',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow variable or `function` declarations in nested blocks',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-inner-declarations.html',
            category: 'pedantic',
        },
        fixable: 'none',
        schema: [
            {
                enum: [
                    'functions',
                    'both',
                ],
            },
            {
                type: 'object',
                properties: {
                    blockScopedFunctions: {
                        enum: [
                            'allow',
                            'disallow',
                        ],
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
