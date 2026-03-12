export default {
    name: 'no-confusing-set-timeout',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow confusing usages of jest.setTimeout',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-confusing-set-timeout.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
