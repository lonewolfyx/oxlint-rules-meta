export default {
    name: 'no-return-wrap',
    meta: {
        source: 'promise',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow wrapping values in `Promise.resolve` or `Promise.reject` when not needed.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/no-return-wrap.html',
            category: 'style',
        },
        fixable: 'pending',
        schema: [
            {
                type: 'object',
                properties: {
                    allowReject: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
