export default {
    name: 'no-new-array',
    meta: {
        source: 'unicorn',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow `new Array()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-new-array.html',
            category: 'correctness',
        },
        fixable: 'pending',
        schema: [],
    },
}
