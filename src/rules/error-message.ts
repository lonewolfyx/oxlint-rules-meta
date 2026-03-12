export default {
    name: 'error-message',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce passing a `message` value when creating a built-in error.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/error-message.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
