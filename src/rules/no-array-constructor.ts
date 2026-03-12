export default {
    name: 'no-array-constructor',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow `Array` constructors',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-array-constructor.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
