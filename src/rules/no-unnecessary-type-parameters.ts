export default {
    name: 'no-unnecessary-type-parameters',
    meta: {
        source: 'typescript',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Disallow type parameters that aren\'t used multiple times',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-parameters.html',
            category: 'nursery',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
