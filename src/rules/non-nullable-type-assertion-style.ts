export default {
    name: 'non-nullable-type-assertion-style',
    meta: {
        source: 'typescript',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Enforce non-null assertions over explicit type assertions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/non-nullable-type-assertion-style.html',
            category: 'restriction',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
