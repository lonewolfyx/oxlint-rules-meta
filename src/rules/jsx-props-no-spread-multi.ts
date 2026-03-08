export default {
    name: 'jsx-props-no-spread-multi',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow JSX prop spreading the same identifier multiple times',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
