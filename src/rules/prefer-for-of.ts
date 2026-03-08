export default {
    name: 'prefer-for-of',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce the use of `for-of` loop over the standard `for` loop where possible',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-for-of.html',
            category: 'style',
        },
        fixable: 'pending',
        schema: [],
    },
}
