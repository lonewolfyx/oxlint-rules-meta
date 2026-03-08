export default {
    name: 'no-extend-native',
    meta: {
        source: 'eslint',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Disallow extending native types',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-extend-native.html',
            category: 'suspicious',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    exceptions: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
