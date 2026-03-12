export default {
    name: 'prefer-numeric-literals',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-numeric-literals.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        defaultOptions: [],
        schema: [],
    },
}
