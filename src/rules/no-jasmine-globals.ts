export default {
    name: 'no-jasmine-globals',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow Jasmine globals',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-jasmine-globals.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        schema: [],
    },
}
