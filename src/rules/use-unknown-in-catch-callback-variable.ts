export default {
    name: 'use-unknown-in-catch-callback-variable',
    meta: {
        source: 'typescript',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Enforce typing arguments in Promise rejection callbacks as `unknown`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/use-unknown-in-catch-callback-variable.html',
            category: 'restriction',
        },
        fixable: 'fixable_suggestion',
        schema: [],
    },
}
