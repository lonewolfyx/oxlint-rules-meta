export default {
    name: 'no-styled-jsx-in-document',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Prevent usage of `styled-jsx` in `pages/_document.js`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-styled-jsx-in-document.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
