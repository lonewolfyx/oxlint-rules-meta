export default {
    name: 'button-has-type',
    meta: {
        source: 'react',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow usage of `button` elements without an explicit `type` attribute',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/button-has-type.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    button: {
                        default: true,
                        type: 'boolean',
                    },
                    submit: {
                        default: true,
                        type: 'boolean',
                    },
                    reset: {
                        default: true,
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
