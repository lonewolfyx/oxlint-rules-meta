export default {
    name: 'prefer-todo',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Suggest using `test.todo`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/prefer-todo.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
