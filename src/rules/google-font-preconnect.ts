export default {
    name: 'google-font-preconnect',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Ensure `preconnect` is used with Google Fonts.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/google-font-preconnect.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
