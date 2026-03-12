export default {
    name: 'no-unnecessary-array-flat-depth',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow using `1` as the `depth` argument of `Array#flat()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-flat-depth.html',
            category: 'pedantic',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
