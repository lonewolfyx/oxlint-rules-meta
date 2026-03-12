export default {
    name: 'default',
    meta: {
        source: 'import',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Ensure a default export is present, given a default import.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/default.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
