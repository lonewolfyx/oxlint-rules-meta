export default {
    name: 'new-for-builtins',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/new-for-builtins.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        schema: [],
    },
}
