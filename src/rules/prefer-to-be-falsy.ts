export default {
    name: 'prefer-to-be-falsy',
    meta: {
        source: 'vitest',
        category: 'style',
        default: false,
        docs: {
            description: 'enforce using toBeFalsy()',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vitest/prefer-to-be-falsy.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
