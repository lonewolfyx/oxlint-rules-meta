export default {
    name: 'no-thenable',
    meta: {
        source: 'unicorn',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow `then` property.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-thenable.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
