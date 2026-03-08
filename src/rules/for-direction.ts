export default {
    name: 'for-direction',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Enforce `for` loop update clause moving the counter in the right direction',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/for-direction.html',
            category: 'correctness',
        },
        fixable: 'fixable_dangerous_fix',
        schema: [],
    },
}
