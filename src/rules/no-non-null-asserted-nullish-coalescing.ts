export default {
    name: 'no-non-null-asserted-nullish-coalescing',
    meta: {
        source: 'typescript',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow non-null assertions in the left operand of a nullish coalescing operator',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-non-null-asserted-nullish-coalescing.html',
            category: 'restriction',
        },
        fixable: 'pending',
        schema: [],
    },
}
