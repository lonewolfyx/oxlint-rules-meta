export default {
    name: 'bad-object-literal-comparison',
    meta: {
        source: 'oxc',
        category: 'correctness',
        default: true,
        description: 'Checks for comparisons between object and array literals.',
        docs: {
            description: 'Checks for comparisons between object and array literals.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-object-literal-comparison.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
