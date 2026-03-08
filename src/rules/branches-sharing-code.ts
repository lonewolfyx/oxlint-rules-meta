export default {
    name: 'branches-sharing-code',
    meta: {
        source: 'oxc',
        category: 'nursery',
        default: false,
        description: 'Checks if the if and else blocks contain shared code that can be moved out of the blocks.',
        docs: {
            description: 'Checks if the if and else blocks contain shared code that can be moved out of the blocks.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/branches-sharing-code.html',
            category: 'nursery',
        },
        fixable: 'none',
        schema: [],
    },
}
