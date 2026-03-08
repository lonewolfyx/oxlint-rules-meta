export default {
    name: 'jsx-curly-brace-presence',
    meta: {
        source: 'react',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-curly-brace-presence.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [
            {
                anyOf: [
                    {
                        type: 'object',
                        properties: {
                            props: {
                                enum: [
                                    'always',
                                    'never',
                                    'ignore',
                                ],
                            },
                            children: {
                                enum: [
                                    'always',
                                    'never',
                                    'ignore',
                                ],
                            },
                            propElementValues: {
                                enum: [
                                    'always',
                                    'never',
                                    'ignore',
                                ],
                            },
                        },
                        additionalProperties: false,
                    },
                    {
                        enum: [
                            'always',
                            'never',
                            'ignore',
                        ],
                    },
                ],
            },
        ],
    },
}
