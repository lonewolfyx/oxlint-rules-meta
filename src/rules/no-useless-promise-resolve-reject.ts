export default {
    name: 'no-useless-promise-resolve-reject',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-promise-resolve-reject.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
