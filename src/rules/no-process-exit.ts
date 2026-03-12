export default {
    name: 'no-process-exit',
    meta: {
        source: 'unicorn',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow `process.exit()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-process-exit.html',
            category: 'restriction',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [],
    },
}
