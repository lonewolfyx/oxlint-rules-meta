export default {
    name: 'no-mixed-enums',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow enums from having both number and string members',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-mixed-enums.html',
            category: 'pedantic',
        },
        fixable: 'none',
        schema: [],
    },
}
