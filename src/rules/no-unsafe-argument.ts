export default {
    name: 'no-unsafe-argument',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow calling a function with a value with type `any`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-argument.html',
            category: 'pedantic',
        },
        fixable: 'none',
        schema: [],
    },
}
