export default {
    name: 'no-unnecessary-boolean-literal-compare',
    meta: {
        source: 'typescript',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow unnecessary equality comparisons against boolean literals',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-boolean-literal-compare.html',
            category: 'suspicious',
        },
        fixable: 'pending',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowComparingNullableBooleansToFalse: {
                        type: 'boolean',
                        description: 'Whether to allow comparisons between nullable boolean variables and `false`.',
                    },
                    allowComparingNullableBooleansToTrue: {
                        type: 'boolean',
                        description: 'Whether to allow comparisons between nullable boolean variables and `true`.',
                    },
                    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: {
                        type: 'boolean',
                        description: 'Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.',
                    },
                },
            },
        ],
    },
}
