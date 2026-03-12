export default {
    name: 'no-import-compiler-macros',
    meta: {
        source: 'vue',
        category: 'restriction',
        default: false,
        docs: {
            description: 'disallow importing Vue compiler macros',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vue/no-import-compiler-macros.html',
            category: 'restriction',
        },
        fixable: 'fixable_dangerous_fix',
        defaultOptions: [],
        schema: [],
    },
}
