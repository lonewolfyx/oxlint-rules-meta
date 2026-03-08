export default {
    name: 'prefer-mock-promise-shorthand',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer mock resolved/rejected shorthands for promises',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-mock-promise-shorthand.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        schema: [],
    },
}
