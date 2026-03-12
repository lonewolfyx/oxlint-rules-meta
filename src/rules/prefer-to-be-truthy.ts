export default {
    name: 'prefer-to-be-truthy',
    meta: {
        source: 'vitest',
        category: 'style',
        default: false,
        docs: {
            description: 'enforce using `toBeTruthy`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
