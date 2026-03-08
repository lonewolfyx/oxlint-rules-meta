export default {
    name: 'prefer-array-flat-map',
    meta: {
        source: 'unicorn',
        category: 'perf',
        default: false,
        docs: {
            description: 'Prefer `.flatMap(…)` over `.map(…).flat()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-flat-map.html',
            category: 'perf',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
