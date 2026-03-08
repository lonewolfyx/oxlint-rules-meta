export default {
    name: 'no-sync-scripts',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Prevent synchronous scripts.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-sync-scripts.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
