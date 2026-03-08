export default {
    name: 'no-import-assign',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow assigning to imported bindings',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-import-assign.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
