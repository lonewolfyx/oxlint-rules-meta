export default {
    name: 'rules-of-hooks',
    meta: {
        source: 'react',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'enforces the Rules of Hooks',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/rules-of-hooks.html',
            category: 'pedantic',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    additionalHooks: {
                        type: 'string',
                    },
                },
            },
        ],
    },
}
