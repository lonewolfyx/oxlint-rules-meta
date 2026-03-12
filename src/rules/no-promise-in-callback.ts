export default {
    name: 'no-promise-in-callback',
    meta: {
        source: 'promise',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow using promises inside of callbacks.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/no-promise-in-callback.html',
            category: 'suspicious',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
