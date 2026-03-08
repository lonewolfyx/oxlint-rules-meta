export default {
    name: 'no-new-statics',
    meta: {
        source: 'promise',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow calling `new` on a Promise static method.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/no-new-statics.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
