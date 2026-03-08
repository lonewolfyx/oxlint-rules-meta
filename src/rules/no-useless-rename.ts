export default {
    name: 'no-useless-rename',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow renaming import, export, and destructured assignments to the same name',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-useless-rename.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreDestructuring: {
                        type: 'boolean',
                    },
                    ignoreImport: {
                        type: 'boolean',
                    },
                    ignoreExport: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
