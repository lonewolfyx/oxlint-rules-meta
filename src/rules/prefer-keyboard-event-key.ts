export default {
    name: 'prefer-keyboard-event-key',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-keyboard-event-key.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
