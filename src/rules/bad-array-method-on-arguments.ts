export default {
    name: 'bad-array-method-on-arguments',
    meta: {
        source: 'oxc',
        category: 'correctness',
        default: true,
        description: 'This rule applies when an array method is called on the arguments object itself.',
        docs: {
            description: 'This rule applies when an array method is called on the arguments object itself.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-array-method-on-arguments.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
