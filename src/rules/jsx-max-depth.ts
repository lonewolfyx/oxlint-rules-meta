export default {
    name: 'jsx-max-depth',
    meta: {
        source: 'react',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce JSX maximum depth',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-max-depth.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    max: {
                        type: 'integer',
                        minimum: 0,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
