export default {
    name: 'max-dependencies',
    meta: {
        source: 'import',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce the maximum number of dependencies a module can have.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/max-dependencies.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    max: {
                        type: 'number',
                    },
                    ignoreTypeImports: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
