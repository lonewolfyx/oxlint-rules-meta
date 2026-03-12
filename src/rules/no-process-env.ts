export default {
    name: 'no-process-env',
    meta: {
        source: 'node',
        category: 'restriction',
        default: false,
        docs: {
            description: 'disallow the use of `process.env`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/node/no-process-env.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    allowedVariables: {
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
