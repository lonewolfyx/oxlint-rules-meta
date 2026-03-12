export default {
    name: 'no-confusing-void-expression',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Require expressions of type void to appear in statement position',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-confusing-void-expression.html',
            category: 'pedantic',
        },
        fixable: 'fixable_safe_fix_or_suggestion',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    ignoreArrowShorthand: {
                        type: 'boolean',
                        description: 'Whether to ignore "shorthand" `() =>` arrow functions: those without `{ ... }` braces.',
                    },
                    ignoreVoidOperator: {
                        type: 'boolean',
                        description: 'Whether to ignore returns that start with the `void` operator.',
                    },
                    ignoreVoidReturningFunctions: {
                        type: 'boolean',
                        description: 'Whether to ignore returns from functions with explicit `void` return types and functions with contextual `void` return types.',
                    },
                },
            },
        ],
    },
}
