export default {
    name: 'no-instanceof-builtins',
    meta: {
        source: 'unicorn',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow `instanceof` with built-in objects',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-instanceof-builtins.html',
            category: 'suspicious',
        },
        fixable: 'conditional_suggestion',
        defaultOptions: [
            {
                useErrorIsError: false,
                strategy: 'loose',
                include: [],
                exclude: [],
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    useErrorIsError: {
                        type: 'boolean',
                    },
                    strategy: {
                        enum: [
                            'loose',
                            'strict',
                        ],
                    },
                    include: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    exclude: {
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
