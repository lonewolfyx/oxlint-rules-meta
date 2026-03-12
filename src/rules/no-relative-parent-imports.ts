export default {
    name: 'no-relative-parent-imports',
    meta: {
        source: 'import',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Forbid importing modules from parent directories.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-relative-parent-imports.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    commonjs: {
                        type: 'boolean',
                    },
                    amd: {
                        type: 'boolean',
                    },
                    esmodule: {
                        type: 'boolean',
                    },
                    ignore: {
                        type: 'array',
                        minItems: 1,
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
