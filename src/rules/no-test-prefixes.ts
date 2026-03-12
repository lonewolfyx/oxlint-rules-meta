export default {
    name: 'no-test-prefixes',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Require using `.only` and `.skip` over `f` and `x`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-test-prefixes.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
