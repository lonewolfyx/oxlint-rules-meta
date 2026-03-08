export default {
    name: 'preserve-caught-error',
    meta: {
        source: 'eslint',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow losing originally caught error when re-throwing custom errors',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/preserve-caught-error.html',
            category: 'suspicious',
        },
        fixable: 'conditional_fix',
        schema: [
            {
                type: 'object',
                properties: {
                    requireCatchParameter: {
                        type: 'boolean',
                        description: 'Requires the catch blocks to always have the caught error parameter so it is not discarded.',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
