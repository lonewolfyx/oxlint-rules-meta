export default {
    name: 'no-var-requires',
    meta: {
        source: 'typescript',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow `require` statements except in import statements',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-var-requires.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allow: {
                        type: 'array',
                        description: 'Patterns of import paths to allow requiring from.',
                        items: {
                            type: 'string',
                        },
                    },
                },
            },
        ],
    },
}
