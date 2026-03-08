export default {
    name: 'no-object-constructor',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow calls to the `Object` constructor without an argument',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-object-constructor.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        schema: [],
    },
}
