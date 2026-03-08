export default {
    name: 'no-await-expression-member',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow member access from await expression.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-await-expression-member.html',
            category: 'style',
        },
        fixable: 'fixable_dangerous_fix',
        schema: [],
    },
}
