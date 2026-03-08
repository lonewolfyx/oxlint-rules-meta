export default {
    name: 'no-optional-chaining',
    meta: {
        source: 'oxc',
        category: 'restriction',
        default: false,
        description: 'Disallow optional chaining.',
        docs: {
            description: 'Disallow optional chaining.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-optional-chaining.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [],
    },
}
