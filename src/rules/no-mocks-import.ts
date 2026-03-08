export default {
    name: 'no-mocks-import',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow manually importing from `__mocks__`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-mocks-import.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [],
    },
}
