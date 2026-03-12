export default {
    name: 'no-unused-vars',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow unused variables',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-unused-vars.html',
            category: 'correctness',
        },
        fixable: 'conditional_dangerous_fix_or_suggestion',
        defaultOptions: [],
        schema: [
            {
                oneOf: [
                    {
                        enum: [
                            'all',
                            'local',
                        ],
                    },
                    {
                        type: 'object',
                        properties: {
                            vars: {
                                enum: [
                                    'all',
                                    'local',
                                ],
                            },
                            varsIgnorePattern: {
                                type: 'string',
                            },
                            args: {
                                enum: [
                                    'all',
                                    'after-used',
                                    'none',
                                ],
                            },
                            ignoreRestSiblings: {
                                type: 'boolean',
                            },
                            argsIgnorePattern: {
                                type: 'string',
                            },
                            caughtErrors: {
                                enum: [
                                    'all',
                                    'none',
                                ],
                            },
                            caughtErrorsIgnorePattern: {
                                type: 'string',
                            },
                            destructuredArrayIgnorePattern: {
                                type: 'string',
                            },
                            ignoreClassWithStaticInitBlock: {
                                type: 'boolean',
                            },
                            ignoreUsingDeclarations: {
                                type: 'boolean',
                            },
                            reportUsedIgnorePattern: {
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
