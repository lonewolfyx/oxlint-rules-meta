export default {
    name: 'prefer-node-protocol',
    meta: {
        source: 'unicorn',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Prefer using the `node:` protocol when importing Node.js builtin modules.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-node-protocol.html',
            category: 'restriction',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
