export default {
    name: 'no-await-in-loop',
    meta: {
        source: 'eslint',
        category: 'perf',
        default: false,
        docs: {
            description: 'Disallow `await` inside of loops',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-await-in-loop.html',
            category: 'perf',
        },
        fixable: 'none',
        schema: [],
    },
}
