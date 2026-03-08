export default {
    name: 'no-deprecated-functions',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow use of deprecated functions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-deprecated-functions.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
