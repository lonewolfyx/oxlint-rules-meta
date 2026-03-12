export default {
    name: 'no-dynamic-require',
    meta: {
        source: 'import',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Forbid `require()` calls with expressions.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-dynamic-require.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    esmodule: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
