export default {
    name: 'no-empty-function',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow empty functions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-empty-function.html',
            category: 'restriction',
        },
        fixable: 'pending',
        schema: [
            {
                type: 'object',
                properties: {
                    allow: {
                        type: 'array',
                        items: {
                            enum: [
                                'functions',
                                'arrowFunctions',
                                'generatorFunctions',
                                'methods',
                                'generatorMethods',
                                'getters',
                                'setters',
                                'constructors',
                                'asyncFunctions',
                                'asyncMethods',
                                'privateConstructors',
                                'protectedConstructors',
                                'decoratedFunctions',
                                'overrideMethods',
                            ],
                        },
                        uniqueItems: true,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
