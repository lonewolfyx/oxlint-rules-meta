export default {
    name: 'prefer-blob-reading-methods',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-blob-reading-methods.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        schema: [],
    },
}
