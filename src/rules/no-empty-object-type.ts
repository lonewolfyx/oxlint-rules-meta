export default {
    name: 'no-empty-object-type',
    meta: {
        source: 'typescript',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow accidentally using the "empty object" type',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-empty-object-type.html',
            category: 'restriction',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowInterfaces: {
                        type: 'string',
                        description: 'Whether to allow empty interfaces.',
                        enum: [
                            'always',
                            'never',
                            'with-single-extends',
                        ],
                    },
                    allowObjectTypes: {
                        type: 'string',
                        description: 'Whether to allow empty object type literals.',
                        enum: [
                            'always',
                            'never',
                        ],
                    },
                    allowWithName: {
                        type: 'string',
                        description: 'A stringified regular expression to allow interfaces and object type aliases with the configured name.',
                    },
                },
            },
        ],
    },
}
