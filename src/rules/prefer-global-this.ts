export default {
    name: 'prefer-global-this',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer `globalThis` over `window`, `self`, and `global`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-global-this.html',
            category: 'style',
        },
        fixable: 'fixable_suggestion',
        schema: [],
    },
}
