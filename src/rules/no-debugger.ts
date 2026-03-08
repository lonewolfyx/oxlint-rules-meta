export default {
    name: 'no-debugger',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow the use of `debugger`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-debugger.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
