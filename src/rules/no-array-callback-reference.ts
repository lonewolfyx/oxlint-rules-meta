export default {
    name: 'no-array-callback-reference',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prevent passing a function reference directly to iterator methods.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-callback-reference.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [],
    },
}
