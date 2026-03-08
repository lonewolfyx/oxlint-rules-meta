export default {
    name: 'no-wrapper-object-types',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow using confusing built-in primitive class wrappers',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-wrapper-object-types.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
