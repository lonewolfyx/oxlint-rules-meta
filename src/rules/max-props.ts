export default {
    name: 'max-props',
    meta: {
        source: 'vue',
        category: 'restriction',
        default: false,
        docs: {
            description: 'enforce maximum number of props in Vue component',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vue/max-props.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    maxProps: {
                        type: 'integer',
                        minimum: 1,
                    },
                },
                additionalProperties: false,
                minProperties: 1,
            },
        ],
    },
}
