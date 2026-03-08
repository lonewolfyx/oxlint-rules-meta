export default {
    name: 'prefer-to-be-object',
    meta: {
        source: 'vitest',
        category: 'style',
        default: false,
        docs: {
            description: 'enforce using toBeObject()',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be-object.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
