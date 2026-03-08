export default {
    name: 'prefer-type-error',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce throwing `TypeError` in type checking conditions.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-type-error.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
