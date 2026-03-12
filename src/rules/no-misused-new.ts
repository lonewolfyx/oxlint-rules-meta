export default {
    name: 'no-misused-new',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Enforce valid definition of `new` and `constructor`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-misused-new.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
