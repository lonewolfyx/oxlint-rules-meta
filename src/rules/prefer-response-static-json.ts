export default {
    name: 'prefer-response-static-json',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer `Response.json()` over `new Response(JSON.stringify())`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-response-static-json.html',
            category: 'style',
        },
        fixable: 'fixable_suggestion',
        schema: [],
    },
}
