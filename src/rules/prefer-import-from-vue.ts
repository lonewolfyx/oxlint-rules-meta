export default {
    name: 'prefer-import-from-vue',
    meta: {
        source: 'vue',
        category: 'correctness',
        default: false,
        docs: {
            description: 'enforce import from \'vue\' instead of import from \'@vue/*\'',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vue/prefer-import-from-vue.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
