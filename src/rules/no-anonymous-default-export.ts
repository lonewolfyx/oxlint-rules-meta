export default {
    name: 'no-anonymous-default-export',
    meta: {
        source: 'unicorn',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow anonymous functions and classes as the default export.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-anonymous-default-export.html',
            category: 'restriction',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [],
    },
}
