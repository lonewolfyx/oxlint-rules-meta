export default {
    name: 'no-unsafe-return',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow returning a value with type `any` from a function',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-return.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
