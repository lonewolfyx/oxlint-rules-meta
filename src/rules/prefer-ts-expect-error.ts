export default {
    name: 'prefer-ts-expect-error',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce using `@ts-expect-error` over `@ts-ignore`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-ts-expect-error.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
