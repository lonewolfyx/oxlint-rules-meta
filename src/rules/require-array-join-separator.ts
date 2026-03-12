export default {
    name: 'require-array-join-separator',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce using the separator argument with `Array#join()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-array-join-separator.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        defaultOptions: [],
        schema: [],
    },
}
