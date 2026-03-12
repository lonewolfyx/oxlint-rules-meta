export default {
    name: 'prefer-array-flat',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer `Array#flat()` over legacy techniques to flatten arrays.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-flat.html',
            category: 'pedantic',
        },
        fixable: 'conditional_dangerous_fix',
        defaultOptions: [
            {
                functions: [],
            },
        ],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    functions: {
                        type: 'array',
                        uniqueItems: true,
                    },
                },
            },
        ],
    },
}
