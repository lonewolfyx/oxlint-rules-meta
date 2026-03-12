export default {
    name: 'prefer-string-raw',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer using the `String.raw` tag to avoid escaping `\\`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-raw.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
