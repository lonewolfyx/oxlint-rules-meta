export default {
    name: 'no-unsafe-assignment',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow assigning a value with type `any` to variables and properties',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-assignment.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
