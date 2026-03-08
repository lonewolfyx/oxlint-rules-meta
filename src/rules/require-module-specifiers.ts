export default {
    name: 'require-module-specifiers',
    meta: {
        source: 'unicorn',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Require non-empty specifier list in import and export statements.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-module-specifiers.html',
            category: 'suspicious',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
