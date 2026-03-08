export default {
    name: 'prefer-event-target',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer `EventTarget` over `EventEmitter`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-event-target.html',
            category: 'pedantic',
        },
        fixable: 'none',
        schema: [],
    },
}
