export default {
    name: 'prefer-set-has',
    meta: {
        source: 'unicorn',
        category: 'perf',
        default: false,
        docs: {
            description: 'Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-set-has.html',
            category: 'perf',
        },
        fixable: 'fixable_dangerous_fix',
        defaultOptions: [],
        schema: [],
    },
}
