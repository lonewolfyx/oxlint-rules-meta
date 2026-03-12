export default {
    name: 'prefer-includes',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-includes.html',
            category: 'style',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
