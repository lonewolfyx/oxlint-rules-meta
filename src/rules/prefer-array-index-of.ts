export default {
    name: 'prefer-array-index-of',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-array-index-of.html',
            category: 'style',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [],
    },
}
