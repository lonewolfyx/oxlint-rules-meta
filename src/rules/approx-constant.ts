export default {
    name: 'approx-constant',
    meta: {
        source: 'oxc',
        category: 'suspicious',
        default: false,
        description: 'Disallows the use of approximate constants, instead preferring the use\nof the constants in the Math object.',
        docs: {
            description: 'Disallows the use of approximate constants, instead preferring the use\nof the constants in the Math object.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/approx-constant.html',
            category: 'suspicious',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
