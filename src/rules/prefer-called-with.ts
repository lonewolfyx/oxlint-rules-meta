export default {
    name: 'prefer-called-with',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Suggest using `toHaveBeenCalledWith()`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-called-with.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
