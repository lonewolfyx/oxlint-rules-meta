export default {
    name: 'vars-on-top',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Require `var` declarations be placed at the top of their containing scope',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/vars-on-top.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [],
    },
}
