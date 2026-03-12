export default {
    name: 'no-unsafe-type-assertion',
    meta: {
        source: 'typescript',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow type assertions that narrow a type',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-type-assertion.html',
            category: 'suspicious',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
