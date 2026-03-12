export default {
    name: 'no-typeof-undefined',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow comparing `undefined` using `typeof`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-typeof-undefined.html',
            category: 'pedantic',
        },
        fixable: 'fixable_safe_fix_or_suggestion',
        defaultOptions: [
            {
                checkGlobalVariables: false,
            },
        ],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    checkGlobalVariables: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
}
