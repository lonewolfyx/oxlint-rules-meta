export default {
    name: 'jsx-no-duplicate-props',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow duplicate properties in JSX',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-duplicate-props.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreCase: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
