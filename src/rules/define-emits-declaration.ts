export default {
    name: 'define-emits-declaration',
    meta: {
        source: 'vue',
        category: 'style',
        default: false,
        docs: {
            description: 'enforce declaration style of `defineEmits`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vue/define-emits-declaration.html',
            category: 'style',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [
            {
                enum: [
                    'type-based',
                    'type-literal',
                    'runtime',
                ],
            },
        ],
    },
}
