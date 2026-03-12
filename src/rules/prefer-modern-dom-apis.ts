export default {
    name: 'prefer-modern-dom-apis',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-modern-dom-apis.html',
            category: 'style',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
