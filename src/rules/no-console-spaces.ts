export default {
    name: 'no-console-spaces',
    meta: {
        source: 'unicorn',
        category: 'style',
        default: false,
        docs: {
            description: 'Do not use leading/trailing space between `console.log` parameters.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-console-spaces.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
