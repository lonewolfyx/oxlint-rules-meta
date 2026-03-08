export default {
    name: 'prefer-native-coercion-functions',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-native-coercion-functions.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        schema: [],
    },
}
