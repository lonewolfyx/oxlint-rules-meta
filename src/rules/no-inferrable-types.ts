export default {
    name: 'no-inferrable-types',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-inferrable-types.html',
            category: 'style',
        },
        fixable: 'fixable_suggestion',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    ignoreParameters: {
                        type: 'boolean',
                        description: 'Whether to ignore function parameters.',
                    },
                    ignoreProperties: {
                        type: 'boolean',
                        description: 'Whether to ignore class properties.',
                    },
                },
            },
        ],
    },
}
