export default {
    name: 'prefer-to-have-been-called-times',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Suggest using `toHaveBeenCalledTimes()`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-to-have-been-called-times.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
