export default {
    name: 'prefer-function-type',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce using function types instead of interfaces with call signatures',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-function-type.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        defaultOptions: [],
        schema: [],
    },
}
