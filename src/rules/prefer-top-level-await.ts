export default {
    name: 'prefer-top-level-await',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer top-level await over top-level promises and async function calls.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-top-level-await.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [],
    },
}
