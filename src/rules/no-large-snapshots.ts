export default {
    name: 'no-large-snapshots',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow large snapshots',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-large-snapshots.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    maxSize: {
                        type: 'number',
                    },
                    inlineMaxSize: {
                        type: 'number',
                    },
                    allowedSnapshots: {
                        type: 'object',
                        additionalProperties: {
                            type: 'array',
                        },
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
