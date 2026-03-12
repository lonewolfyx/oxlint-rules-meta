export default {
    name: 'prefer-math-min-max',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer `Math.min()` and `Math.max()` over ternaries for simple comparisons.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-math-min-max.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
