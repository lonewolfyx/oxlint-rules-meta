export default {
    name: 'no-useless-empty-export',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow empty exports that don\'t change anything in a module file',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-useless-empty-export.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
