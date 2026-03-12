export default {
    name: 'grouped-accessor-pairs',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Require grouped accessor pairs in object literals and classes',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/grouped-accessor-pairs.html',
            category: 'style',
        },
        fixable: 'pending',
        defaultOptions: [
            'anyOrder',
            {
                enforceForTSTypes: false,
            },
        ],
        schema: [
            {
                enum: [
                    'anyOrder',
                    'getBeforeSet',
                    'setBeforeGet',
                ],
            },
            {
                type: 'object',
                properties: {
                    enforceForTSTypes: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
