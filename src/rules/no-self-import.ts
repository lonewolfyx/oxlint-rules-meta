export default {
    name: 'no-self-import',
    meta: {
        source: 'import',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Forbid a module from importing itself.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-self-import.html',
            category: 'suspicious',
        },
        fixable: 'none',
        schema: [],
    },
}
