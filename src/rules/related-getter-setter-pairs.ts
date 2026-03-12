export default {
    name: 'related-getter-setter-pairs',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce that `get()` types should be assignable to their equivalent `set()` type',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/related-getter-setter-pairs.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
