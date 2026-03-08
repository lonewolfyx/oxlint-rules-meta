export default {
    name: 'no-duplicate-head',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Prevent duplicate usage of `<Head>` in `pages/_document.js`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-duplicate-head.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
