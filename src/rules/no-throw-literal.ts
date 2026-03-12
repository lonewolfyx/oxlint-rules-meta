export default {
    name: 'no-throw-literal',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow throwing literals as exceptions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-throw-literal.html',
            category: 'pedantic',
        },
        fixable: 'conditional_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
