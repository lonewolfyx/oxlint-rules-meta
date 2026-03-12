export default {
    name: 'define-props-declaration',
    meta: {
        source: 'vue',
        category: 'style',
        default: false,
        docs: {
            description: 'enforce declaration style of `defineProps`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vue/define-props-declaration.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                enum: [
                    'type-based',
                    'runtime',
                ],
            },
        ],
    },
}
