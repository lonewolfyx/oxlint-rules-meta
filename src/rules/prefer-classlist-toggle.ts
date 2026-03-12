export default {
    name: 'prefer-classlist-toggle',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer using `Element#classList.toggle()` to toggle class names.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-classlist-toggle.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
