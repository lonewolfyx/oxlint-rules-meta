export default {
    name: 'exports-last',
    meta: {
        source: 'import',
        category: 'style',
        default: false,
        docs: {
            description: 'Ensure all exports appear after other statements.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/exports-last.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [],
    },
}
