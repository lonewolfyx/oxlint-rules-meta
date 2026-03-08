export default {
    name: 'prefer-optional-chain',
    meta: {
        source: 'typescript',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-optional-chain.html',
            category: 'nursery',
        },
        fixable: 'fixable_dangerous_fix_or_suggestion',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: {
                        type: 'boolean',
                        description: 'Allow autofixers that will change the return type of the expression. This option is considered unsafe as it may break the build.',
                    },
                    checkAny: {
                        type: 'boolean',
                        description: 'Check operands that are typed as `any` when inspecting "loose boolean" operands.',
                    },
                    checkBigInt: {
                        type: 'boolean',
                        description: 'Check operands that are typed as `bigint` when inspecting "loose boolean" operands.',
                    },
                    checkBoolean: {
                        type: 'boolean',
                        description: 'Check operands that are typed as `boolean` when inspecting "loose boolean" operands.',
                    },
                    checkNumber: {
                        type: 'boolean',
                        description: 'Check operands that are typed as `number` when inspecting "loose boolean" operands.',
                    },
                    checkString: {
                        type: 'boolean',
                        description: 'Check operands that are typed as `string` when inspecting "loose boolean" operands.',
                    },
                    checkUnknown: {
                        type: 'boolean',
                        description: 'Check operands that are typed as `unknown` when inspecting "loose boolean" operands.',
                    },
                    requireNullish: {
                        type: 'boolean',
                        description: 'Skip operands that are not typed with `null` and/or `undefined` when inspecting "loose boolean" operands.',
                    },
                },
            },
        ],
    },
}
