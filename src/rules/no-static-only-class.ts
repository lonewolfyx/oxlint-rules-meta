export default {
    name: 'no-static-only-class',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow classes that only have static members.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-static-only-class.html',
            category: 'pedantic',
        },
        fixable: 'fixable_dangerous_fix',
        defaultOptions: [],
        schema: [],
    },
}
