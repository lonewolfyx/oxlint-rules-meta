export default {
    name: 'prefer-spy-on',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Suggest using `jest.spyOn()`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-spy-on.html',
            category: 'style',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
