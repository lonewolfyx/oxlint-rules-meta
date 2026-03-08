export default {
    name: 'prefer-promise-reject-errors',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Require using Error objects as Promise rejection reasons',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/prefer-promise-reject-errors.html',
            category: 'pedantic',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowEmptyReject: {
                        type: 'boolean',
                        description: 'Whether to allow calls to `Promise.reject()` with no arguments.',
                    },
                    allowThrowingAny: {
                        type: 'boolean',
                        description: 'Whether to always allow throwing values typed as `any`.',
                    },
                    allowThrowingUnknown: {
                        type: 'boolean',
                        description: 'Whether to always allow throwing values typed as `unknown`.',
                    },
                },
            },
        ],
    },
}
