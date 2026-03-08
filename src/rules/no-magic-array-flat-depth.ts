export default {
    name: 'no-magic-array-flat-depth',
    meta: {
        source: 'unicorn',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow a magic number as the `depth` argument in `Array#flat(…).`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-magic-array-flat-depth.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [],
    },
}
