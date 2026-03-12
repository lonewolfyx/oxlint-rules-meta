export default {
    name: 'no-immediate-mutation',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow immediate mutation after variable assignment.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-immediate-mutation.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [],
    },
}
