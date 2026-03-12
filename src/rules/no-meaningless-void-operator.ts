export default {
    name: 'no-meaningless-void-operator',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow the `void` operator except when used to discard a value',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-meaningless-void-operator.html',
            category: 'correctness',
        },
        fixable: 'fixable_safe_fix_or_suggestion',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    checkNever: {
                        type: 'boolean',
                        description: 'Whether to suggest removing `void` when the argument has type `never`.',
                    },
                },
            },
        ],
    },
}
