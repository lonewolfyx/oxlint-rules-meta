export default {
    name: 'no-named-as-default',
    meta: {
        source: 'import',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Forbid use of exported name as identifier of default export.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-as-default.html',
            category: 'suspicious',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
