export default {
    name: 'no-this-assignment',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow assigning `this` to a variable.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-this-assignment.html',
            category: 'pedantic',
        },
        fixable: 'none',
        schema: [],
    },
}
