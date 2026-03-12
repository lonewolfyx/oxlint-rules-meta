export default {
    name: 'sort-keys',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Require object keys to be sorted',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/sort-keys.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        defaultOptions: [
            'asc',
            {
                allowLineSeparatedGroups: false,
                caseSensitive: true,
                ignoreComputedKeys: false,
                minKeys: 2,
                natural: false,
            },
        ],
        schema: [
            {
                enum: [
                    'asc',
                    'desc',
                ],
            },
            {
                type: 'object',
                properties: {
                    caseSensitive: {
                        type: 'boolean',
                    },
                    natural: {
                        type: 'boolean',
                    },
                    minKeys: {
                        type: 'integer',
                        minimum: 2,
                    },
                    allowLineSeparatedGroups: {
                        type: 'boolean',
                    },
                    ignoreComputedKeys: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
