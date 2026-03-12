export default {
    name: 'prefer-to-have-been-called',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Suggest using `toHaveBeenCalled`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-to-have-been-called.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
