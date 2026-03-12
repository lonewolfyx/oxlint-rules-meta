export default {
    name: 'namespace',
    meta: {
        source: 'import',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Ensure imported namespaces contain dereferenced properties as they are dereferenced.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/namespace.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    allowComputed: {
                        description: 'If `false`, will report computed (and thus, un-lintable) references to namespace members.',
                        type: 'boolean',
                        default: false,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
