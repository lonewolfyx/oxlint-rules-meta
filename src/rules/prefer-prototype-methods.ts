export default {
    name: 'prefer-prototype-methods',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer borrowing methods from the prototype instead of the instance.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-prototype-methods.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
