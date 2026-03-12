export default {
    name: 'class-methods-use-this',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Enforce that class methods utilize `this`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/class-methods-use-this.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [
            {
                enforceForClassFields: true,
                exceptMethods: [],
                ignoreOverrideMethods: false,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    exceptMethods: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    enforceForClassFields: {
                        type: 'boolean',
                    },
                    ignoreOverrideMethods: {
                        type: 'boolean',
                    },
                    ignoreClassesWithImplements: {
                        enum: [
                            'all',
                            'public-fields',
                        ],
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
