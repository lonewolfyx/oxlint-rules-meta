export default {
    name: 'no-unsafe-finally',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow control flow statements in `finally` blocks',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unsafe-finally.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
