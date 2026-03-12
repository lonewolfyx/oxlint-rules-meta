export default {
    name: 'require-post-message-target-origin',
    meta: {
        source: 'unicorn',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Enforce using the `targetOrigin` argument with `window.postMessage()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-post-message-target-origin.html',
            category: 'suspicious',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
