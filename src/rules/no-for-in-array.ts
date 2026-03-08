export default {
    name: 'no-for-in-array',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow iterating over an array with a for-in loop',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-for-in-array.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
