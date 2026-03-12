export default {
    name: 'no-async-client-component',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Prevent Client Components from being async functions.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-async-client-component.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
