export default {
    name: 'no-webpack-loader-syntax',
    meta: {
        source: 'import',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Forbid webpack loader syntax in imports.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-webpack-loader-syntax.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
