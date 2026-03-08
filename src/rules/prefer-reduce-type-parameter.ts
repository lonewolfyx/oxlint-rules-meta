export default {
    name: 'prefer-reduce-type-parameter',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce using type parameter when calling `Array#reduce` instead of using a type assertion',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-reduce-type-parameter.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
