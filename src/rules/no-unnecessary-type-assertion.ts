export default {
    name: 'no-unnecessary-type-assertion',
    meta: {
        source: 'typescript',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow type assertions that do not change the type of an expression',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-type-assertion.html',
            category: 'suspicious',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    checkLiteralConstAssertions: {
                        type: 'boolean',
                        description: 'Whether to check literal const assertions.',
                    },
                    typesToIgnore: {
                        type: 'array',
                        description: 'A list of type names to ignore.',
                        items: {
                            type: 'string',
                        },
                    },
                },
            },
        ],
    },
}
