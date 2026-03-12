export default {
    name: 'no-undef',
    meta: {
        source: 'eslint',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Disallow the use of undeclared variables unless mentioned in `/*global */` comments',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-undef.html',
            category: 'nursery',
        },
        fixable: 'none',
        defaultOptions: [
            {
                typeof: false,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    typeof: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
