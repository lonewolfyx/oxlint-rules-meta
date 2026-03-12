export default {
    name: 'require-array-sort-compare',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/require-array-sort-compare.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    ignoreStringArrays: {
                        type: 'boolean',
                        description: 'Whether to ignore arrays in which all elements are strings.',
                    },
                },
            },
        ],
    },
}
