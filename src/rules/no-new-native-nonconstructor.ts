export default {
    name: 'no-new-native-nonconstructor',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow `new` operators with global non-constructor functions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-native-nonconstructor.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
