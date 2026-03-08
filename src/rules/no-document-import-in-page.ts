export default {
    name: 'no-document-import-in-page',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Prevent importing `next/document` outside of `pages/_document.js`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-document-import-in-page.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
