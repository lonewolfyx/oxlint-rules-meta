export default {
    name: 'require-property-description',
    meta: {
        source: 'jsdoc',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Requires that each `@property` tag has a `description` value.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property-description.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
