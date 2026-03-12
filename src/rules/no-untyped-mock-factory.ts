export default {
    name: 'no-untyped-mock-factory',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow using `jest.mock()` factories without an explicit type parameter',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-untyped-mock-factory.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        defaultOptions: [],
        schema: [],
    },
}
