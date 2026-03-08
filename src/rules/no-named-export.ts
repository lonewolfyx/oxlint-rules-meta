export default {
    name: 'no-named-export',
    meta: {
        source: 'import',
        category: 'style',
        default: false,
        docs: {
            description: 'Forbid named exports.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-export.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [],
    },
}
