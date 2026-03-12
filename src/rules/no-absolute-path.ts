export default {
    name: 'no-absolute-path',
    meta: {
        source: 'import',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Forbid import of modules using absolute paths.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-absolute-path.html',
            category: 'suspicious',
        },
        fixable: 'pending',
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
