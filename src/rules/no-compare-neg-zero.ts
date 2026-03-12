export default {
    name: 'no-compare-neg-zero',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow comparing against `-0`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-compare-neg-zero.html',
            category: 'correctness',
        },
        fixable: 'conditional_safe_fix_or_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
