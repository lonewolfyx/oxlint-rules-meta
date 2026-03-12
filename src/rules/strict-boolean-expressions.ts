export default {
    name: 'strict-boolean-expressions',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow certain types in boolean expressions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/strict-boolean-expressions.html',
            category: 'pedantic',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowAny: {
                        type: 'boolean',
                        description: 'Whether to allow `any`s in a boolean context.',
                    },
                    allowNullableBoolean: {
                        type: 'boolean',
                        description: 'Whether to allow nullable `boolean`s in a boolean context.',
                    },
                    allowNullableEnum: {
                        type: 'boolean',
                        description: 'Whether to allow nullable `enum`s in a boolean context.',
                    },
                    allowNullableNumber: {
                        type: 'boolean',
                        description: 'Whether to allow nullable `number`s in a boolean context.',
                    },
                    allowNullableObject: {
                        type: 'boolean',
                        description: 'Whether to allow nullable `object`s, `symbol`s, and functions in a boolean context.',
                    },
                    allowNullableString: {
                        type: 'boolean',
                        description: 'Whether to allow nullable `string`s in a boolean context.',
                    },
                    allowNumber: {
                        type: 'boolean',
                        description: 'Whether to allow `number`s in a boolean context.',
                    },
                    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: {
                        type: 'boolean',
                        description: 'Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.',
                    },
                    allowString: {
                        type: 'boolean',
                        description: 'Whether to allow `string`s in a boolean context.',
                    },
                },
            },
        ],
    },
}
