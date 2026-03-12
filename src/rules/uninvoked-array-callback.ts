export default {
    name: 'uninvoked-array-callback',
    meta: {
        source: 'oxc',
        category: 'correctness',
        default: true,
        description: 'This rule applies when an Array function has a callback argument used for an array with empty slots.',
        docs: {
            description: 'This rule applies when an Array function has a callback argument used for an array with empty slots.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/uninvoked-array-callback.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
