export default {
    name: 'no-useless-computed-key',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow unnecessary computed property keys in objects and classes',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-computed-key.html',
            category: 'style',
        },
        fixable: 'pending',
        defaultOptions: [
            {
                enforceForClassMembers: true,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    enforceForClassMembers: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
