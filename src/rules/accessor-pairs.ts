export default {
    name: 'accessor-pairs',
    meta: {
        source: 'eslint',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce getter and setter pairs in objects and classes',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/accessor-pairs.html',
            category: 'pedantic',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    getWithoutSet: {
                        type: 'boolean',
                    },
                    setWithoutGet: {
                        type: 'boolean',
                    },
                    enforceForClassMembers: {
                        type: 'boolean',
                    },
                    enforceForTSTypes: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
