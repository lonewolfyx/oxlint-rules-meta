export default {
    name: 'require-property-name',
    meta: {
        source: 'jsdoc',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Requires that all `@property` tags have names.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property-name.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
