export default {
    name: 'no-extraneous-class',
    meta: {
        source: 'typescript',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow classes used as namespaces',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-extraneous-class.html',
            category: 'suspicious',
        },
        fixable: 'fixable_dangerous_suggestion',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowConstructorOnly: {
                        type: 'boolean',
                        description: 'Whether to allow extraneous classes that contain only a constructor.',
                    },
                    allowEmpty: {
                        type: 'boolean',
                        description: 'Whether to allow extraneous classes that have no body (i.e. are empty).',
                    },
                    allowStaticOnly: {
                        type: 'boolean',
                        description: 'Whether to allow extraneous classes that only contain static members.',
                    },
                    allowWithDecorator: {
                        type: 'boolean',
                        description: 'Whether to allow extraneous classes that include a decorator.',
                    },
                },
            },
        ],
    },
}
