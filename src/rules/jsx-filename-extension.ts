export default {
    name: 'jsx-filename-extension',
    meta: {
        source: 'react',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow file extensions that may contain JSX',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-filename-extension.html',
            category: 'restriction',
        },
        fixable: 'pending',
        schema: [
            {
                type: 'object',
                properties: {
                    allow: {
                        enum: [
                            'always',
                            'as-needed',
                        ],
                    },
                    extensions: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                    ignoreFilesWithoutCode: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
