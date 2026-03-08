export default {
    name: 'require-await',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow async functions which do not return promises and have no `await` expression',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/require-await.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        schema: [],
    },
}
