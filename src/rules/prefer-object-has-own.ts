export default {
    name: 'prefer-object-has-own',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-object-has-own.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        defaultOptions: [],
        schema: [],
    },
}
