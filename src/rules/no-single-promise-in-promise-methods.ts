export default {
    name: 'no-single-promise-in-promise-methods',
    meta: {
        source: 'unicorn',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow passing single-element arrays to `Promise` methods.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-single-promise-in-promise-methods.html',
            category: 'correctness',
        },
        fixable: 'conditional_fix',
        defaultOptions: [],
        schema: [],
    },
}
