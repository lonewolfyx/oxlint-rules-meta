export default {
    name: 'exhaustive-deps',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'verifies the list of dependencies for Hooks like useEffect and similar',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/exhaustive-deps.html',
            category: 'correctness',
        },
        fixable: 'fixable_dangerous_fix_or_suggestion',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                enableDangerousAutofixThisMayCauseInfiniteLoops: false,
                properties: {
                    additionalHooks: {
                        type: 'string',
                    },
                    enableDangerousAutofixThisMayCauseInfiniteLoops: {
                        type: 'boolean',
                    },
                    experimental_autoDependenciesHooks: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    requireExplicitEffectDeps: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
}
