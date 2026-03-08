export default {
    name: 'jsx-no-target-blank',
    meta: {
        source: 'react',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow `target="_blank"` attribute without `rel="noreferrer"`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-target-blank.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        schema: [
            {
                type: 'object',
                properties: {
                    allowReferrer: {
                        type: 'boolean',
                    },
                    enforceDynamicLinks: {
                        enum: [
                            'always',
                            'never',
                        ],
                    },
                    warnOnSpreadAttributes: {
                        type: 'boolean',
                    },
                    links: {
                        type: 'boolean',
                        default: true,
                    },
                    forms: {
                        type: 'boolean',
                        default: false,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
