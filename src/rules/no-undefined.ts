export default {
    name: 'no-undefined',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow the use of `undefined` as an identifier',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-undefined.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
