export default {
    name: 'no-proto',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow the use of the `__proto__` property',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-proto.html',
            category: 'restriction',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [],
    },
}
