export default {
    name: 'no-empty-file',
    meta: {
        source: 'unicorn',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow empty files.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-empty-file.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
