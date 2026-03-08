export default {
    name: 'prefer-date-now',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-date-now.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
