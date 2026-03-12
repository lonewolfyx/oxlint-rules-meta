export default {
    name: 'prefer-string-starts-ends-with',
    meta: {
        source: 'unicorn',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-starts-ends-with.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
