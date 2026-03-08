export default {
    name: 'prefer-await-to-callbacks',
    meta: {
        source: 'promise',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer `async`/`await` to the callback pattern.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-await-to-callbacks.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [],
    },
}
