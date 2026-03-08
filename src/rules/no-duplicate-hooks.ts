export default {
    name: 'no-duplicate-hooks',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow duplicate setup and teardown hooks',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-duplicate-hooks.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [],
    },
}
