export default {
    name: 'no-invalid-void-type',
    meta: {
        source: 'typescript',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow `void` type outside of generic or return types',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-invalid-void-type.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowAsThisParameter: {
                        type: 'boolean',
                        description: 'Whether a `this` parameter of a function may be `void`.',
                    },
                    allowInGenericTypeArguments: {
                        description: 'Whether `void` can be used as a valid value for generic type parameters.',
                        oneOf: [
                            {
                                type: 'boolean',
                                description: 'Whether `void` can be used as a valid value for all generic type parameters.',
                            },
                            {
                                type: 'array',
                                description: 'Allowlist of types that may accept `void` as a generic type parameter.',
                                items: {
                                    type: 'string',
                                },
                                minItems: 1,
                            },
                        ],
                    },
                },
            },
        ],
    },
}
