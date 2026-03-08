export default {
    name: 'no-return-in-finally',
    meta: {
        source: 'promise',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Disallow return statements in `finally()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/no-return-in-finally.html',
            category: 'nursery',
        },
        fixable: 'none',
        schema: [],
    },
}
