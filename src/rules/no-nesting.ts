export default {
    name: 'no-nesting',
    meta: {
        source: 'promise',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow nested `then()` or `catch()` statements.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/no-nesting.html',
            category: 'style',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [],
    },
}
