export default {
    name: 'no-prototype-builtins',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow calling some `Object.prototype` methods directly on objects',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-prototype-builtins.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [],
    },
}
