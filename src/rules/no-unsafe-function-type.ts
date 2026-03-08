export default {
    name: 'no-unsafe-function-type',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow using the unsafe built-in Function type',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-function-type.html',
            category: 'pedantic',
        },
        fixable: 'none',
        schema: [],
    },
}
