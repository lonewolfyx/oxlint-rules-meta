export default {
    name: 'prefer-object-spread',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/prefer-object-spread.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
