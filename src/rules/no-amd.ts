export default {
    name: 'no-amd',
    meta: {
        source: 'import',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Forbid AMD `require` and `define` calls.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-amd.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [],
    },
}
