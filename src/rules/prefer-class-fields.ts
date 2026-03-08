export default {
    name: 'prefer-class-fields',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer class field declarations over `this` assignments in constructors.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-class-fields.html',
            category: 'style',
        },
        fixable: 'conditional_safe_fix_or_suggestion',
        schema: [],
    },
}
