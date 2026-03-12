export default {
    name: 'group-exports',
    meta: {
        source: 'import',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer named exports to be grouped together in a single export declaration',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/group-exports.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
