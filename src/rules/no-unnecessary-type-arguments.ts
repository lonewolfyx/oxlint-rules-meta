export default {
    name: 'no-unnecessary-type-arguments',
    meta: {
        source: 'typescript',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow type arguments that are equal to the default',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-arguments.html',
            category: 'suspicious',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
