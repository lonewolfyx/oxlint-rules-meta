export default {
    name: 'no-script-component-in-head',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Prevent usage of `next/script` in `next/head` component.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-script-component-in-head.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
