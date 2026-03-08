export default {
    name: 'consistent-existence-index-check',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`, and `findLastIndex()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-existence-index-check.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
