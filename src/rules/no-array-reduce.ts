export default {
    name: 'no-array-reduce',
    meta: {
        source: 'unicorn',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow `Array#reduce()` and `Array#reduceRight()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-reduce.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [
            {
                allowSimpleOperations: true,
            },
        ],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowSimpleOperations: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
}
