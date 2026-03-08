export default {
    name: 'prefer-module',
    meta: {
        source: 'unicorn',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Prefer JavaScript modules (ESM) over CommonJS.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-module.html',
            category: 'restriction',
        },
        fixable: 'pending',
        schema: [],
    },
}
