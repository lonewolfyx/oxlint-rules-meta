export default {
    name: 'no-var',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Require `let` or `const` instead of `var`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-var.html',
            category: 'restriction',
        },
        fixable: 'conditional_fix',
        defaultOptions: [],
        schema: [],
    },
}
