export default {
    name: 'no-before-interactive-script-outside-document',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Prevent usage of `next/script`\'s `beforeInteractive` strategy outside of `pages/_document.js`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-before-interactive-script-outside-document.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
