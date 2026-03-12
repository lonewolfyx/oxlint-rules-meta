export default {
    name: 'throw-new-error',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Require `new` when creating an error.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/throw-new-error.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
