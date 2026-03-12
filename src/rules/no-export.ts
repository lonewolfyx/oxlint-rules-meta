export default {
    name: 'no-export',
    meta: {
        source: 'jest',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow using `exports` in files containing tests',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-export.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
