export default {
    name: 'prefer-query-selector',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()` and `.getElementsByName()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-query-selector.html',
            category: 'pedantic',
        },
        fixable: 'conditional_fix',
        schema: [],
    },
}
