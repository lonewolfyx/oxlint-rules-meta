export default {
    name: 'no-caller',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow the use of `arguments.caller` or `arguments.callee`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-caller.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
