export default {
    name: 'yoda',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Require or disallow "Yoda" conditions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/yoda.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [
            'never',
            {
                exceptRange: false,
                onlyEquality: false,
            },
        ],
        schema: [
            {
                enum: [
                    'always',
                    'never',
                ],
            },
            {
                type: 'object',
                properties: {
                    exceptRange: {
                        type: 'boolean',
                    },
                    onlyEquality: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
