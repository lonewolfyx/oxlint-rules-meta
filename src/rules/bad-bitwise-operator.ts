export default {
    name: 'bad-bitwise-operator',
    meta: {
        source: 'oxc',
        category: 'restriction',
        default: false,
        description: 'This rule applies when bitwise operators are used where logical operators are expected.',
        docs: {
            description: 'This rule applies when bitwise operators are used where logical operators are expected.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-bitwise-operator.html',
            category: 'restriction',
        },
        fixable: 'fixable_suggestion',
        schema: [],
    },
}
