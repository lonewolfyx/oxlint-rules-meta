export default {
    name: 'no-invalid-fetch-options',
    meta: {
        source: 'unicorn',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow invalid options in `fetch()` and `new Request()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-invalid-fetch-options.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
