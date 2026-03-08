export default {
    name: 'no-document-cookie',
    meta: {
        source: 'unicorn',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Do not use `document.cookie` directly.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-document-cookie.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [],
    },
}
