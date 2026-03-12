export default {
    name: 'no-array-for-each',
    meta: {
        source: 'unicorn',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Prefer `for…of` over the `forEach` method.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-array-for-each.html',
            category: 'restriction',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [],
    },
}
