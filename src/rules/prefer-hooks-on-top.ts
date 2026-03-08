export default {
    name: 'prefer-hooks-on-top',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Suggest having hooks before any test cases',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-hooks-on-top.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [],
    },
}
