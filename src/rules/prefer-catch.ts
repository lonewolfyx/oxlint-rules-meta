export default {
    name: 'prefer-catch',
    meta: {
        source: 'promise',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer `catch` to `then(a, b)`/`then(null, b)` for handling errors.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-catch.html',
            category: 'style',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [],
    },
}
