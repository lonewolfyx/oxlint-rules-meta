export default {
    name: 'no-await-in-promise-methods',
    meta: {
        source: 'unicorn',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow using `await` in `Promise` method parameters.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-await-in-promise-methods.html',
            category: 'correctness',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
