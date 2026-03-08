export default {
    name: 'no-nodejs-modules',
    meta: {
        source: 'import',
        category: 'style',
        default: false,
        docs: {
            description: 'Forbid Node.js builtin modules.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-nodejs-modules.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    allow: {
                        type: 'array',
                        uniqueItems: true,
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
