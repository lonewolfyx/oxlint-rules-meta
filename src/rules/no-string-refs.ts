export default {
    name: 'no-string-refs',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow using string references',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-string-refs.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    noTemplateLiterals: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
