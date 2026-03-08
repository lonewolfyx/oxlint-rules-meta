export default {
    name: 'no-default-export',
    meta: {
        source: 'import',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Forbid default exports.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-default-export.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [],
    },
}
