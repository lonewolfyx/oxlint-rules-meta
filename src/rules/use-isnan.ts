export default {
    name: 'use-isnan',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Require calls to `isNaN()` when checking for `NaN`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/use-isnan.html',
            category: 'correctness',
        },
        fixable: 'conditional_fix',
        defaultOptions: [
            {
                enforceForIndexOf: false,
                enforceForSwitchCase: true,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    enforceForSwitchCase: {
                        type: 'boolean',
                    },
                    enforceForIndexOf: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
