export default {
    name: 'no-named-as-default-member',
    meta: {
        source: 'import',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Forbid use of exported name as property of default export.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-named-as-default-member.html',
            category: 'suspicious',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
