export default {
    name: 'prefer-expect-resolves',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer `await expect(...).resolves` over `expect(await ...)` syntax',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-expect-resolves.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
