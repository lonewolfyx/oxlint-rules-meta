export default {
    name: 'require-property',
    meta: {
        source: 'jsdoc',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/require-property.html',
            category: 'correctness',
        },
        fixable: 'pending',
        schema: [],
    },
}
