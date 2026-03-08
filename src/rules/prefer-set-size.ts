export default {
    name: 'prefer-set-size',
    meta: {
        source: 'unicorn',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Prefer using `Set#size` instead of `Array#length`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-set-size.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
