export default {
    name: 'no-lonely-if',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow `if` statements as the only statement in `if` blocks without `else`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-lonely-if.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [],
    },
}
