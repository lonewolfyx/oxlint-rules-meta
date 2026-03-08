export default {
    name: 'check-access',
    meta: {
        source: 'jsdoc',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Checks that `@access` tags have a valid value.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/check-access.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [],
    },
}
