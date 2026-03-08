export default {
    name: 'no-confusing-non-null-assertion',
    meta: {
        source: 'typescript',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow non-null assertion in locations that may be confusing',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-confusing-non-null-assertion.html',
            category: 'suspicious',
        },
        fixable: 'pending',
        schema: [],
    },
}
