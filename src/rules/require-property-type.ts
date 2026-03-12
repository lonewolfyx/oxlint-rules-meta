export default {
    name: 'require-property-type',
    meta: {
        source: 'jsdoc',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Requires that each `@property` tag has a type value (in curly brackets).',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property-type.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
