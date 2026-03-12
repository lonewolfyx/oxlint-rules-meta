export default {
    name: 'prefer-string-trim-start-end',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
