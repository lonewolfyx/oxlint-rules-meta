export default {
    name: 'no-redundant-type-constituents',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow members of unions and intersections that do nothing or override type information',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-redundant-type-constituents.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
