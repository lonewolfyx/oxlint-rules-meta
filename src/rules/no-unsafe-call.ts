export default {
    name: 'no-unsafe-call',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow calling a value with type `any`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-call.html',
            category: 'pedantic',
        },
        fixable: 'none',
        schema: [],
    },
}
