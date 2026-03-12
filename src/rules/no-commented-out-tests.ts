export default {
    name: 'no-commented-out-tests',
    meta: {
        source: 'jest',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow commented out tests',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-commented-out-tests.html',
            category: 'suspicious',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
