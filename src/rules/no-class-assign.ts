export default {
    name: 'no-class-assign',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow reassigning class members',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-class-assign.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
