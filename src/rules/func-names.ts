export default {
    name: 'func-names',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Require or disallow named `function` expressions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/func-names.html',
            category: 'style',
        },
        fixable: 'conditional_safe_fix_or_suggestion',
        schema: {
            definitions: {
                value: {
                    enum: [
                        'always',
                        'as-needed',
                        'never',
                    ],
                },
            },
            items: [
                {
                    $ref: '#/definitions/value',
                },
                {
                    type: 'object',
                    properties: {
                        generators: {
                            $ref: '#/definitions/value',
                        },
                    },
                    additionalProperties: false,
                },
            ],
        },
    },
}
