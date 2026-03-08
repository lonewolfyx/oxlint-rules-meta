export default {
    name: 'no-extra-bind',
    meta: {
        source: 'eslint',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow unnecessary calls to `.bind()`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extra-bind.html',
            category: 'suspicious',
        },
        fixable: 'pending',
        schema: [],
    },
}
