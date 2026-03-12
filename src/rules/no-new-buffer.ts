export default {
    name: 'no-new-buffer',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-new-buffer.html',
            category: 'pedantic',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
