export default {
    name: 'consistent-date-clone',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer passing `Date` directly to the constructor when cloning.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/consistent-date-clone.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
