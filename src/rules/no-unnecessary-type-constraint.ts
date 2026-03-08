export default {
    name: 'no-unnecessary-type-constraint',
    meta: {
        source: 'typescript',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow unnecessary constraints on generic types',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-constraint.html',
            category: 'suspicious',
        },
        fixable: 'pending',
        schema: [],
    },
}
