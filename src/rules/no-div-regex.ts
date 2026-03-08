export default {
    name: 'no-div-regex',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow equal signs explicitly at the beginning of regular expressions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-div-regex.html',
            category: 'restriction',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
