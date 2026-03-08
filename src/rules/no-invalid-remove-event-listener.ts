export default {
    name: 'no-invalid-remove-event-listener',
    meta: {
        source: 'unicorn',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Prevent calling `EventTarget#removeEventListener()` with the result of an expression.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-invalid-remove-event-listener.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
