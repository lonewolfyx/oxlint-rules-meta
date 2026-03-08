export default {
    name: 'no-shadow',
    meta: {
        source: 'eslint',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow variable declarations from shadowing variables declared in the outer scope',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-shadow.html',
            category: 'suspicious',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    builtinGlobals: {
                        type: 'boolean',
                    },
                    hoist: {
                        enum: [
                            'all',
                            'functions',
                            'never',
                            'types',
                            'functions-and-types',
                        ],
                    },
                    allow: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    ignoreOnInitialization: {
                        type: 'boolean',
                    },
                    ignoreTypeValueShadow: {
                        type: 'boolean',
                    },
                    ignoreFunctionTypeParameterNameValueShadow: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
