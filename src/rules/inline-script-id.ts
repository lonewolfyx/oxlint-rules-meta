export default {
    name: 'inline-script-id',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce `id` attribute on `next/script` components with inline content.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/inline-script-id.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
