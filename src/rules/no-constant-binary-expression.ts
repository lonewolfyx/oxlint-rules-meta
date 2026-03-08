export default {
    name: 'no-constant-binary-expression',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow expressions where the operation doesn\'t affect the value',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-constant-binary-expression.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
