export default {
    name: 'only-used-in-recursion',
    meta: {
        source: 'oxc',
        category: 'correctness',
        default: true,
        description: 'Checks for arguments that are only used in recursion with no side-effects.',
        docs: {
            description: 'Checks for arguments that are only used in recursion with no side-effects.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/only-used-in-recursion.html',
            category: 'correctness',
        },
        fixable: 'fixable_dangerous_fix',
        defaultOptions: [],
        schema: [],
    },
}
