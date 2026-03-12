export default {
    name: 'no-title-in-document-head',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Prevent usage of `<title>` with `Head` component from `next/document`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-title-in-document-head.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
