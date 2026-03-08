export default {
    name: 'prefer-jest-mocked',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer `jest.mocked()` over `fn as jest.Mock`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-jest-mocked.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        schema: [],
    },
}
