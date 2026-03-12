export default {
    name: 'no-unexpected-multiline',
    meta: {
        source: 'eslint',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow confusing multiline expressions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unexpected-multiline.html',
            category: 'suspicious',
        },
        fixable: 'fixable_dangerous_fix',
        defaultOptions: [],
        schema: [],
    },
}
