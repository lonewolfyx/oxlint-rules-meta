export default {
    name: 'next-script-for-ga',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Prefer `@next/third-parties/google` when using the inline script for Google Analytics and Tag Manager.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/next-script-for-ga.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
