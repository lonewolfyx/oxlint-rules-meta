export default {
    name: 'no-this-in-exported-function',
    meta: {
        source: 'oxc',
        category: 'suspicious',
        default: false,
        description: 'Disallows the use of this in exported functions.',
        docs: {
            description: 'Disallows the use of this in exported functions.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-this-in-exported-function.html',
            category: 'suspicious',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
