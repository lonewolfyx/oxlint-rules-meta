export default {
    name: 'require-default-export',
    meta: {
        source: 'vue',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'require components to be the default export',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vue/require-default-export.html',
            category: 'suspicious',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
