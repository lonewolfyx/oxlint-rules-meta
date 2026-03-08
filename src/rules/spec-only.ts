export default {
    name: 'spec-only',
    meta: {
        source: 'promise',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow use of non-standard Promise static methods.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/spec-only.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    allowedMethods: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
