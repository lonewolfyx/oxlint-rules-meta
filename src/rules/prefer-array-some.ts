export default {
    name: 'prefer-array-some',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-some.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
