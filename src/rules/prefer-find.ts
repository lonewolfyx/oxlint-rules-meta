export default {
    name: 'prefer-find',
    meta: {
        source: 'typescript',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-find.html',
            category: 'nursery',
        },
        fixable: 'none',
        schema: [],
    },
}
