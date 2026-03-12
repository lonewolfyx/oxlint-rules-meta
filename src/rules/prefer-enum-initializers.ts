export default {
    name: 'prefer-enum-initializers',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Require each enum member value to be explicitly initialized',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-enum-initializers.html',
            category: 'pedantic',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
