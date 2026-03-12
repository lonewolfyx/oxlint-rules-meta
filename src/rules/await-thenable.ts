export default {
    name: 'await-thenable',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow awaiting a value that is not a Thenable',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/await-thenable.html',
            category: 'correctness',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
