export default {
    name: 'always-return',
    meta: {
        source: 'promise',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Require returning inside each `then()` to create readable and reusable Promise chains.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/always-return.html',
            category: 'suspicious',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreLastCallback: {
                        type: 'boolean',
                    },
                    ignoreAssignmentVariable: {
                        type: 'array',
                        items: {
                            type: 'string',
                            pattern: '^[\\w$]+$',
                        },
                        uniqueItems: true,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
