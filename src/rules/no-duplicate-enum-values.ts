export default {
    name: 'no-duplicate-enum-values',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow duplicate enum member values',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-duplicate-enum-values.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
