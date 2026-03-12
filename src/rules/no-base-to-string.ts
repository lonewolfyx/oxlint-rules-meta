export default {
    name: 'no-base-to-string',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-base-to-string.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    checkUnknown: {
                        type: 'boolean',
                        description: 'Whether to also check values of type `unknown`',
                    },
                    ignoredTypeNames: {
                        type: 'array',
                        description: 'Stringified type names to ignore.',
                        items: {
                            type: 'string',
                        },
                    },
                },
            },
        ],
    },
}
