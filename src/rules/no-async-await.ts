export default {
    name: 'no-async-await',
    meta: {
        source: 'oxc',
        category: 'restriction',
        default: false,
        description: 'Disallows the use of async/await.',
        docs: {
            description: 'Disallows the use of async/await.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-async-await.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [],
    },
}
