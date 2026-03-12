export default {
    name: 'no-multiple-resolved',
    meta: {
        source: 'promise',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow creating new promises with paths that resolve multiple times.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/no-multiple-resolved.html',
            category: 'suspicious',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
