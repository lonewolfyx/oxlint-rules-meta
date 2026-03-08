export default {
    name: 'jsx-no-undef',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow undeclared variables in JSX',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-undef.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    allowGlobals: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
