export default {
    name: 'misrefactored-assign-op',
    meta: {
        source: 'oxc',
        category: 'suspicious',
        default: false,
        description: 'https://rust-lang.github.io/rust-clippy/master/#/misrefactored_assign_op',
        docs: {
            description: 'https://rust-lang.github.io/rust-clippy/master/#/misrefactored_assign_op',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/misrefactored-assign-op.html',
            category: 'suspicious',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
