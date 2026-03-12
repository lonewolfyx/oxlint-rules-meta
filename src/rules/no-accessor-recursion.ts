export default {
    name: 'no-accessor-recursion',
    meta: {
        source: 'unicorn',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow recursive access to `this` within getters and setters.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-accessor-recursion.html',
            category: 'suspicious',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
