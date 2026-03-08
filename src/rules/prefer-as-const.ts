export default {
    name: 'prefer-as-const',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Enforce the use of `as const` over literal type',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-as-const.html',
            category: 'correctness',
        },
        fixable: 'conditional_fix',
        schema: [],
    },
}
