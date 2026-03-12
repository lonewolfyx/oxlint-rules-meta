export default {
    name: 'no-labels',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow labeled statements',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-labels.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [
            {
                allowLoop: false,
                allowSwitch: false,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    allowLoop: {
                        type: 'boolean',
                    },
                    allowSwitch: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
