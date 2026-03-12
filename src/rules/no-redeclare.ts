export default {
    name: 'no-redeclare',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow variable redeclaration',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-redeclare.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [
            {
                builtinGlobals: true,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    builtinGlobals: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
