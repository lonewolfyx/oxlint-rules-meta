export default {
    name: 'no-required-prop-with-default',
    meta: {
        source: 'vue',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'enforce props with default values to be optional',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/vue/no-required-prop-with-default.html',
            category: 'suspicious',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    autofix: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
