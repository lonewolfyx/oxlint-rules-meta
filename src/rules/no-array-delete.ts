export default {
    name: 'no-array-delete',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow using the `delete` operator on array values',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-array-delete.html',
            category: 'correctness',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
