export default {
    name: 'no-unnecessary-slice-end',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow using `.length` or `Infinity` as the `end` argument of `{Array,String,TypedArray}#slice()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-unnecessary-slice-end.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
