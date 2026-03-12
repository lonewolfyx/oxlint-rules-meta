export default {
    name: 'consistent-function-scoping',
    meta: {
        source: 'unicorn',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Move function definitions to the highest possible scope.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-function-scoping.html',
            category: 'suspicious',
        },
        fixable: 'pending',
        defaultOptions: [
            {
                checkArrowFunctions: true,
            },
        ],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    checkArrowFunctions: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
}
