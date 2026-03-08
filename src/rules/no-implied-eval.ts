export default {
    name: 'no-implied-eval',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow the use of `eval()`-like functions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-implied-eval.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
