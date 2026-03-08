export default {
    name: 'no-dynamic-delete',
    meta: {
        source: 'typescript',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow using the `delete` operator on computed key expressions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-dynamic-delete.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [],
    },
}
