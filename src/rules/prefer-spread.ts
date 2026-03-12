export default {
    name: 'prefer-spread',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()` and `String#split(\'\')`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-spread.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        defaultOptions: [],
        schema: [],
    },
}
