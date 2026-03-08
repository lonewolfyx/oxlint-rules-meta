export default {
    name: 'no-dupe-else-if',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow duplicate conditions in if-else-if chains',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-dupe-else-if.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
