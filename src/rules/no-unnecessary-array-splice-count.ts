export default {
    name: 'no-unnecessary-array-splice-count',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow using `.length` or `Infinity` as the `deleteCount` or `skipCount` argument of `Array#{splice,toSpliced}()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-array-splice-count.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
