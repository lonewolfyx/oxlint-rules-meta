export default {
    name: 'no-unassigned-import',
    meta: {
        source: 'import',
        category: 'suspicious',
        default: false,
        docs: {
            description: 'Forbid unassigned imports',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-unassigned-import.html',
            category: 'suspicious',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    devDependencies: {
                        type: [
                            'boolean',
                            'array',
                        ],
                    },
                    optionalDependencies: {
                        type: [
                            'boolean',
                            'array',
                        ],
                    },
                    peerDependencies: {
                        type: [
                            'boolean',
                            'array',
                        ],
                    },
                    allow: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
