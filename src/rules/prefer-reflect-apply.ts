export default {
    name: 'prefer-reflect-apply',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer `Reflect.apply()` over `Function#apply()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-reflect-apply.html',
            category: 'style',
        },
        fixable: 'fixable_suggestion',
        schema: [],
    },
}
