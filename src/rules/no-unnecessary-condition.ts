export default {
    name: 'no-unnecessary-condition',
    meta: {
        source: 'typescript',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Disallow conditionals where the type is always truthy or always falsy',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-unnecessary-condition.html',
            category: 'nursery',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowConstantLoopConditions: {
                        description: 'Whether to ignore constant loop conditions, such as `while (true)`.',
                        oneOf: [
                            {
                                type: 'boolean',
                                description: 'Always ignore or not ignore the loop conditions',
                            },
                            {
                                type: 'string',
                                description: 'Which situations to ignore constant conditions in.',
                                enum: [
                                    'always',
                                    'never',
                                    'only-allowed-literals',
                                ],
                            },
                        ],
                    },
                    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: {
                        type: 'boolean',
                        description: 'Whether to not error when running with a tsconfig that has strictNullChecks turned.',
                    },
                    checkTypePredicates: {
                        type: 'boolean',
                        description: 'Whether to check the asserted argument of a type predicate function for unnecessary conditions',
                    },
                },
            },
        ],
    },
}
