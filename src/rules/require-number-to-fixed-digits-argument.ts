export default {
    name: 'require-number-to-fixed-digits-argument',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce using the digits argument with `Number#toFixed()`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/require-number-to-fixed-digits-argument.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
