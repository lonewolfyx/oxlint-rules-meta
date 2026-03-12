export default {
    name: 'prefer-return-this-type',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce that `this` is used when only `this` type is returned',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-return-this-type.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
