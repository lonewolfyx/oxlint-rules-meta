export default {
    name: 'unambiguous',
    meta: {
        source: 'import',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Forbid potentially ambiguous parse goal (`script` vs. `module`).',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/unambiguous.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
