export default {
    name: 'no-head-import-in-document',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Prevent usage of `next/head` in `pages/_document.js`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-head-import-in-document.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
