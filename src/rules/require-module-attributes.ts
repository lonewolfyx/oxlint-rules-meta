export default {
    name: 'require-module-attributes',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Require non-empty module attributes for imports and exports',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-module-attributes.html',
            category: 'style',
        },
        fixable: 'fixable_suggestion',
        schema: [],
    },
}
