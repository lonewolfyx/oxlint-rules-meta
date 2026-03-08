export default {
    name: 'define-props-destructuring',
    meta: {
        source: 'vue',
        category: 'style',
        default: false,
        docs: {
            description: 'enforce consistent style for props destructuring',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vue/define-props-destructuring.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    destructure: {
                        enum: [
                            'only-when-assigned',
                            'always',
                            'never',
                        ],
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
