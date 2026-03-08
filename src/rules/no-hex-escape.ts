export default {
    name: 'no-hex-escape',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce the use of Unicode escapes instead of hexadecimal escapes.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-hex-escape.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
