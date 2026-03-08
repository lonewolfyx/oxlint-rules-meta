export default {
    name: 'no-async-promise-executor',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow using an async function as a Promise executor',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-async-promise-executor.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
