export default {
    name: 'missing-throw',
    meta: {
        source: 'oxc',
        category: 'correctness',
        default: true,
        description: 'Checks whether the throw keyword is missing in front of a new expression.',
        docs: {
            description: 'Checks whether the throw keyword is missing in front of a new expression.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/missing-throw.html',
            category: 'correctness',
        },
        fixable: 'fixable_suggestion',
        schema: [],
    },
}
