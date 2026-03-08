export default {
    name: 'require-local-test-context-for-concurrent-snapshots',
    meta: {
        source: 'vitest',
        category: 'correctness',
        default: false,
        docs: {
            description: 'require local Test Context for concurrent snapshot tests',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vitest/require-local-test-context-for-concurrent-snapshots.html',
            category: 'correctness',
        },
        fixable: 'pending',
        schema: [],
    },
}
