export default {
    name: 'no-unassigned-vars',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow `let` or `var` variables that are read but never assigned',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unassigned-vars.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
