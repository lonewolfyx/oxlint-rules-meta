export default {
    name: 'no-non-null-assertion',
    meta: {
        source: 'typescript',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow non-null assertions using the `!` postfix operator',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-assertion.html',
            category: 'restriction',
        },
        fixable: 'pending',
        schema: [],
    },
}
