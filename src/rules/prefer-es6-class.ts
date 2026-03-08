export default {
    name: 'prefer-es6-class',
    meta: {
        source: 'react',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce ES5 or ES6 class for React Components',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/prefer-es6-class.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                enum: [
                    'always',
                    'never',
                ],
            },
        ],
    },
}
