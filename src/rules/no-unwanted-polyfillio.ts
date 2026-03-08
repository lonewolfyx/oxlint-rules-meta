export default {
    name: 'no-unwanted-polyfillio',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Prevent duplicate polyfills from Polyfill.io.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-unwanted-polyfillio.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
