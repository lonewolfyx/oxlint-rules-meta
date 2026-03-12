export default {
    name: 'no-nonoctal-decimal-escape',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow `\\8` and `\\9` escape sequences in string literals',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-nonoctal-decimal-escape.html',
            category: 'correctness',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
