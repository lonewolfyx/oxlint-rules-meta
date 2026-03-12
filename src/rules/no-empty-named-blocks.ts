export default {
    name: 'no-empty-named-blocks',
    meta: {
        source: 'import',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Forbid empty named import blocks.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-empty-named-blocks.html',
            category: 'suspicious',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
