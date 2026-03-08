export default {
    name: 'export',
    meta: {
        source: 'import',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Forbid any invalid exports, i.e. re-export of the same name.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/export.html',
            category: 'nursery',
        },
        fixable: 'none',
        schema: [],
    },
}
