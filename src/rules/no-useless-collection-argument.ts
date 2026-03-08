export default {
    name: 'no-useless-collection-argument',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow useless values or fallbacks in `Set`, `Map`, `WeakSet`, or `WeakMap`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-collection-argument.html',
            category: 'style',
        },
        fixable: 'fixable_suggestion',
        schema: [],
    },
}
