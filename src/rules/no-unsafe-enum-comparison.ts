export default {
    name: 'no-unsafe-enum-comparison',
    meta: {
        source: 'typescript',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow comparing an enum value with a non-enum value',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unsafe-enum-comparison.html',
            category: 'suspicious',
        },
        fixable: 'pending',
        schema: [],
    },
}
