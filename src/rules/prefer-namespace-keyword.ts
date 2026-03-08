export default {
    name: 'prefer-namespace-keyword',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-namespace-keyword.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
