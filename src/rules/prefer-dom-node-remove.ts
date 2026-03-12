export default {
    name: 'prefer-dom-node-remove',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-remove.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [],
    },
}
