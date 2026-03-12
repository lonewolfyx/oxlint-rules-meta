export default {
    name: 'no-multiple-slot-args',
    meta: {
        source: 'vue',
        category: 'restriction',
        default: false,
        docs: {
            description: 'disallow passing multiple arguments to scoped slots',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vue/no-multiple-slot-args.html',
            category: 'restriction',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [],
    },
}
