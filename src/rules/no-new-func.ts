export default {
    name: 'no-new-func',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow `new` operators with the `Function` object',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-new-func.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [],
    },
}
