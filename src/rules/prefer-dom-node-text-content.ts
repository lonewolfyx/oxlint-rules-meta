export default {
    name: 'prefer-dom-node-text-content',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer `.textContent` over `.innerText`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-text-content.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        defaultOptions: [],
        schema: [],
    },
}
