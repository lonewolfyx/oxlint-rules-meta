export default {
    name: 'prefer-to-be',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Suggest using `toBe()` for primitive literals',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-to-be.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
