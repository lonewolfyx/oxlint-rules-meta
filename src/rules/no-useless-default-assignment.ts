export default {
    name: 'no-useless-default-assignment',
    meta: {
        source: 'typescript',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Disallow default values that will never be used',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-useless-default-assignment.html',
            category: 'nursery',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: {
                        type: 'boolean',
                        description: 'Unless this is set to `true`, the rule will error on every file whose `tsconfig.json` does _not_ have the `strictNullChecks` compiler option (or `strict`) set to `true`.',
                    },
                },
            },
        ],
    },
}
