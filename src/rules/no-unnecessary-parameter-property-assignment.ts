export default {
    name: 'no-unnecessary-parameter-property-assignment',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow unnecessary assignment of constructor property parameter',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-parameter-property-assignment.html',
            category: 'correctness',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
