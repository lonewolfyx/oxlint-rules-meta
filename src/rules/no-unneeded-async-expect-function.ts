export default {
    name: 'no-unneeded-async-expect-function',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow unnecessary async function wrapper for expected promises',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-unneeded-async-expect-function.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
