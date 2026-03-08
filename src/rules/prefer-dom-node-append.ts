export default {
    name: 'prefer-dom-node-append',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer `Node#append()` over `Node#appendChild()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-append.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
