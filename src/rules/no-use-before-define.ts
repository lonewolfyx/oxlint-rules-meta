export default {
    name: 'no-use-before-define',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow the use of variables before they are defined',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-use-before-define.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [
            {
                oneOf: [
                    {
                        enum: [
                            'nofunc',
                        ],
                    },
                    {
                        type: 'object',
                        properties: {
                            functions: {
                                type: 'boolean',
                            },
                            classes: {
                                type: 'boolean',
                            },
                            variables: {
                                type: 'boolean',
                            },
                            allowNamedExports: {
                                type: 'boolean',
                            },
                            enums: {
                                type: 'boolean',
                            },
                            typedefs: {
                                type: 'boolean',
                            },
                            ignoreTypeReferences: {
                                type: 'boolean',
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
        ],
    },
}
