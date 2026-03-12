export default {
    name: 'no-loop-func',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow function declarations that contain unsafe references inside loop statements',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-loop-func.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
