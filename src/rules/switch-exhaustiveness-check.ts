export default {
    name: 'switch-exhaustiveness-check',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Require switch-case statements to be exhaustive',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/switch-exhaustiveness-check.html',
            category: 'pedantic',
        },
        fixable: 'conditional_suggestion',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowDefaultCaseForExhaustiveSwitch: {
                        type: 'boolean',
                        description: 'If \'true\', allow \'default\' cases on switch statements with exhaustive cases.',
                    },
                    considerDefaultExhaustiveForUnions: {
                        type: 'boolean',
                        description: 'If \'true\', the \'default\' clause is used to determine whether the switch statement is exhaustive for union type',
                    },
                    defaultCaseCommentPattern: {
                        type: 'string',
                        description: 'Regular expression for a comment that can indicate an intentionally omitted default case.',
                    },
                    requireDefaultForNonUnion: {
                        type: 'boolean',
                        description: 'If \'true\', require a \'default\' clause for switches on non-union types.',
                    },
                },
            },
        ],
    },
}
