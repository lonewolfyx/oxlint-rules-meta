export default {
    name: 'no-useless-call',
    meta: {
        source: 'eslint',
        category: 'perf',
        default: false,
        docs: {
            description: 'Disallow unnecessary calls to `.call()` and `.apply()`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-call.html',
            category: 'perf',
        },
        fixable: 'none',
        schema: [],
    },
}
